export default class Traversal {

  constructor(props) {
    this.pathArray = props.path
    this.processTraverse = this.processTraverse.bind(this)
  }

  getPatterns(object, index, path) {
    const pattern = this.pathArray[index + 1]
    if (!pattern) return object
    const output = []
    this.searchPattern(object, pattern, output, path)
    return output
  }

  searchPattern(object, pattern, output, path) {
    const newPath = path.slice()
    if (!object || typeof object !== 'object') return
    return Object.keys(object).map((key) => {
      if (key === pattern) output.push({ object, path: newPath})
      this.searchPattern(object[key], pattern, output, newPath.concat(key))
    })
  }

  traverse(object, index = 0, par = null, path = []) {
    const newPath = path.slice()
    const property = this.pathArray[index]
    if (!property) {
      return this.processTraverse(object, par, this.pathArray[index - 1], path)
    }
    if (property instanceof Array) {
      return property.map(filteredProperty => this.traverse(object[filteredProperty], index + 1, object, newPath.concat(filteredProperty)))
    }
    switch (property) {
      case '?':
        return Object.keys(object).map(key =>
          this.traverse(object[key], index + 1, object, newPath.concat(key))
        )
      case '*':
        return this.getPatterns(object, index, newPath).map(searchedObject =>
          this.traverse(searchedObject.object, index + 1, object, searchedObject.path)
        )
      default:
        return this.traverse(object[property], index + 1, object, newPath.concat(property))
    }
  }
}
