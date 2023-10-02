import { Ansi } from './ansiToReact'

const styles = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  italics: '\x1b[3m',
  underline: '\x1b[4m'
}

const colors = {
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  brightBlack: '\x1b[30;1m',
  brightRed: '\x1b[31;1m',
  brightGreen: '\x1b[32;1m',
  brightYellow: '\x1b[33;1m',
  brightBlue: '\x1b[34;1m',
  brightMagenta: '\x1b[35;1m',
  brightCyan: '\x1b[36;1m',
  brightWhite: '\x1b[37;1m'
}

interface textOptions {
  bold: false
  italics: false
  underline: false
}

const black = (text: string, options: textOptions): string => {
  return `${colors.black}${options.bold ? styles.bold : ''}${
    options.italics ? styles.italics : ''
  }${options.underline ? styles.underline : ''}${text}${styles.reset}`
}
const red = (text: string, options: textOptions): string => {
  return `${colors.red}${options.bold ? styles.bold : ''}${
    options.italics ? styles.italics : ''
  }${options.underline ? styles.underline : ''}${text}${styles.reset}`
}
const green = (text: string, options: textOptions): string => {
  return `${colors.green}${options.bold ? styles.bold : ''}${
    options.italics ? styles.italics : ''
  }${options.underline ? styles.underline : ''}${text}${styles.reset}`
}
const yellow = (text: string, options: textOptions): string => {
  return `${colors.yellow}${options.bold ? styles.bold : ''}${
    options.italics ? styles.italics : ''
  }${options.underline ? styles.underline : ''}${text}${styles.reset}`
}
const blue = (text: string, options: textOptions): string => {
  return `${colors.blue}${options.bold ? styles.bold : ''}${
    options.italics ? styles.italics : ''
  }${options.underline ? styles.underline : ''}${text}${styles.reset}`
}
const magenta = (text: string, options: textOptions): string => {
  return `${colors.magenta}${options.bold ? styles.bold : ''}${
    options.italics ? styles.italics : ''
  }${options.underline ? styles.underline : ''}${text}${styles.reset}`
}
const cyan = (text: string, options: textOptions): string => {
  return `${colors.cyan}${options.bold ? styles.bold : ''}${
    options.italics ? styles.italics : ''
  }${options.underline ? styles.underline : ''}${text}${styles.reset}`
}
const white = (text: string, options: textOptions): string => {
  return `${colors.white}${options.bold ? styles.bold : ''}${
    options.italics ? styles.italics : ''
  }${options.underline ? styles.underline : ''}${text}${styles.reset}`
}

const brightBlack = (text: string, options: textOptions): string => {
  return `${colors.brightBlack}${options.bold ? styles.bold : ''}${
    options.italics ? styles.italics : ''
  }${options.underline ? styles.underline : ''}${text}${styles.reset}`
}
const brightRed = (text: string, options: textOptions): string => {
  return `${colors.brightRed}${options.bold ? styles.bold : ''}${
    options.italics ? styles.italics : ''
  }${options.underline ? styles.underline : ''}${text}${styles.reset}`
}
const brightGreen = (text: string, options: textOptions): string => {
  return `${colors.brightGreen}${options.bold ? styles.bold : ''}${
    options.italics ? styles.italics : ''
  }${options.underline ? styles.underline : ''}${text}${styles.reset}`
}
const brightYellow = (text: string, options: textOptions): string => {
  return `${colors.brightYellow}${options.bold ? styles.bold : ''}${
    options.italics ? styles.italics : ''
  }${options.underline ? styles.underline : ''}${text}${styles.reset}`
}
const brightBlue = (text: string, options: textOptions): string => {
  return `${colors.brightBlue}${options.bold ? styles.bold : ''}${
    options.italics ? styles.italics : ''
  }${options.underline ? styles.underline : ''}${text}${styles.reset}`
}
const brightMagenta = (text: string, options: textOptions): string => {
  return `${colors.brightMagenta}${options.bold ? styles.bold : ''}${
    options.italics ? styles.italics : ''
  }${options.underline ? styles.underline : ''}${text}${styles.reset}`
}
const brightCyan = (text: string, options: textOptions): string => {
  return `${colors.brightCyan}${options.bold ? styles.bold : ''}${
    options.italics ? styles.italics : ''
  }${options.underline ? styles.underline : ''}${text}${styles.reset}`
}
const brightWhite = (text: string, options: textOptions): string => {
  return `${colors.brightWhite}${options.bold ? styles.bold : ''}${
    options.italics ? styles.italics : ''
  }${options.underline ? styles.underline : ''}${text}${styles.reset}`
}

const bold = (text: string): string => {
  return `${styles.bold}${text}${styles.reset}`
}
const italics = (text: string): string => {
  return `${styles.italics}${text}${styles.reset}`
}
const underline = (text: string): string => {
  return `${styles.underline}${text}${styles.reset}`
}
const reset = (): string => {
  return styles.reset
}

export {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white,
  brightBlack,
  brightRed,
  brightGreen,
  brightYellow,
  brightBlue,
  brightMagenta,
  brightCyan,
  brightWhite,
  bold,
  italics,
  underline,
  reset,
  Ansi
}
