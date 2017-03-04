export default class Traversal {

  constructor(props) {
    this.pathArray = props.pathArray
  }

  getPatterns(object, index) {
    const pattern = this.pathArray[index + 1]
    if (!pattern) return object
    const output = []
    this.searchPattern(object, pattern, output)
    return output
  }

  searchPattern(object, pattern, output) {
    if (!object || typeof object !== 'object') return
    return Object.keys(object).map((key) => {
      if (key === pattern) output.push(object)
      this.searchPattern(object[key], pattern, output)
    })
  }

  traverse(callback, object, index = 0) {
    const property = this.pathArray[index]
    if (!property) {
      return callback(object, object)
    }
    if (property instanceof Array) {
      return property.map(filteredProperty => this.traverse(callback, object[filteredProperty], index + 1))
    }
    switch (property) {
      case '?':
        return Object.keys(object).map(key =>
          this.traverse(callback, object[key], index + 1)
        )
      case '*':
        return this.getPatterns(object, index).map(searchedObject =>
          this.traverse(callback, searchedObject, index + 1)
        )
      default:
        return this.traverse(callback, object[property], index + 1)
    }
  }
}
