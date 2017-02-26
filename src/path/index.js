export default class Path {

  constructor(path) {
    this.path = []
    this.constructPath(path)
  }

  getPath() {
    return this.path;
  }

  constructKeys(arrayString) {
    if (arrayString[0] !== '[' || arrayString[arrayString.length - 1] !== ']') {
      throw new Error(`Syntax error. Check - ${arrayString}`)
    }
    return arrayString.slice(1, -1).split(',').map(item => item.trim())
  }

  constructPath(path) {
    path.split('\\.').map((item) => {
      switch (item[0]) {
        case '[':
          return this.path.push(this.constructKeys(item.trim()))
        default:
          return this.path.push(item.trim())
      }
    })
  }

}
