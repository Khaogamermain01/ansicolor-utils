
# ANSIColor-Util

ANSIColor-Util is a color util to get ANSI colors and decode ANSI colors to React Component.
## Installation

Installing ANSIColor-Util
```bash
npm install ansicolor-util
# or
yarn install ansicolor-util
```
    
## Usage/Examples

### Coloring text.
```javascript
import { red } from 'ansicolor-util'; // ESM
const { blue } = require('ansicolor-util'); // CommonJS

console.log(red("Hello, ") + blue("World", { bold: true, underline: true }))
```

### Decoding ANSI Colors to React Component text.
```javascript
import { Ansi } from 'ansicolor-util'; // ESM
const { Ansi } = require('ansicolor-util'); // CommonJS

const App = () => {
  return <>
    <Ansi>
      {`\x1b[31mThis is red text\x1b[0m`}
    </Ansi>
  </>
}

export default App;
```


## Authors

- [@Khaogamermain01](https://www.github.com/khaogamermain01)


## License

[GPL-3.0](https://choosealicense.com/licenses/gpl-3.0/)