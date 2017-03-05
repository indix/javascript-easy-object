export default class Traversal {

  constructor(props) {
    this.pathArray = props.path
    this.processTraverse = this.processTraverse.bind(this)
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

  traverse(object, index = 0, par = null) {
    const property = this.pathArray[index]
    if (!property) {
      return this.processTraverse(object, par, this.pathArray[index - 1])
    }
    if (property instanceof Array) {
      return property.map(filteredProperty => this.traverse(object[filteredProperty], index + 1, object))
    }
    switch (property) {
      case '?':
        return Object.keys(object).map(key =>
          this.traverse(object[key], index + 1, object)
        )
      case '*':
        return this.getPatterns(object, index).map(searchedObject =>
          this.traverse(searchedObject, index + 1, object)
        )
      default:
        return this.traverse(object[property], index + 1, object)
    }
  }
}
