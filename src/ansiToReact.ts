import Anser, { AnserJsonEntry } from 'anser'
import { escapeCarriageReturn } from 'escape-carriage'
import * as React from 'react'

function ansiToJSON (input: string, useClasses: boolean = false): AnserJsonEntry[] {
  input = escapeCarriageReturn(fixBackspace(input))
  return Anser.ansiToJson(input, {
    json: true,
    remove_empty: true,
    use_classes: useClasses
  })
}

function createClass (bundle: AnserJsonEntry): string | null {
  let classNames: string = ''
  classNames += `${bundle.bg}-${bundle.bg != null ? 'bg' : 'fg'} `
  if (bundle.decoration != null) classNames += `ansi-${bundle.decoration} `
  return classNames === '' ? null : classNames.trim()
}

function createStyle (bundle: AnserJsonEntry): React.CSSProperties {
  const style: React.CSSProperties = {}
  style[bundle.bg != null ? 'backgroundColor' : 'color'] = `rgb(${bundle.bg != null ? bundle.bg : bundle.fg})`
  switch (bundle.decoration) {
    case 'bold':
      style.fontWeight = 'bold'
      break
    case 'dim':
      style.opacity = '0.5'
      break
    case 'italic':
      style.fontStyle = 'italic'
      break
    case 'hidden':
      style.visibility = 'hidden'
      break
    case 'strikethrough':
      style.textDecoration = 'line-through'
      break
    case 'underline':
      style.textDecoration = 'underline'
      break
    case 'blink':
      style.textDecoration = 'blink'
      break
  }
  return style
}

function convertBundleIntoReact (linkify: boolean, useClasses: boolean, bundle: AnserJsonEntry, key: number): React.Element {
  const style = useClasses ? undefined : createStyle(bundle)
  const className = useClasses ? createClass(bundle) : undefined

  if (!linkify) {
    return React.createElement('span', { style, key, className }, bundle.content)
  }

  const content: React.ReactNode[] = []
  const linkRegex = /(\s|^)(https?:\/\/(?:www\.|(?!www))[^\s.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/g

  let index = 0
  let match: RegExpExecArray | null
  while ((match = linkRegex.exec(bundle.content)) !== null) {
    const [, pre, url] = match
    const startIndex = match.index + pre.length

    if (startIndex > index) {
      content.push(bundle.content.substring(index, startIndex))
    }

    const href = url.startsWith('www.') ? `http://${url}` : url
    content.push(React.createElement('a', { key: index, href, target: '_blank' }, `${url}`))

    index = linkRegex.lastIndex
  }

  if (index < bundle.content.length) {
    content.push(bundle.content.substring(index))
  }

  return React.createElement('span', { style, key, className }, content)
}

function Ansi (props: { className?: string, useClasses?: boolean, children?: string, linkify?: boolean }): React.Element {
  const { className, useClasses, children, linkify } = props
  return React.createElement(
    'code',
    { className },
    ansiToJSON(children ?? '', useClasses ?? false).map(
      convertBundleIntoReact.bind(null, linkify ?? false, useClasses ?? false)
    )
  )
}

function fixBackspace (txt: string): string {
  return txt.replace(/[^\n]\x08/gm, (_, index) => { // eslint-disable-line no-control-regex
    return index === 0 ? '' : txt[index - 1]
  })
}

export {
  Ansi
};