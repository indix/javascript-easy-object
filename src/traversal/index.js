export default class Traversal {

  constructor(props) {
    this.pathArray = props.pathArray
  }

  traverse(callback, object, index = 0) {
    const property = this.pathArray[index]
    if (!property) {
      return callback(object)
    }
    if (property instanceof Array) {
      return property.map(filteredProperty => this.traverse(callback, object[filteredProperty], index + 1))
    }
    if (property === '?') {
      return Object.keys(object).map(key =>
        this.traverse(callback, object[key], index + 1)
      )
    }
    return this.traverse(callback, object[property], index + 1)
  }
}
