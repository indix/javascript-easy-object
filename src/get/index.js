import Traversal from '../traversal';

export default class Get {

  constructor(props) {
    this.object = props.object
    this.path = props.path
    this.result = []
    this.callback = this.callback.bind(this)
  }

  callback(result) {
    if (!result) {
      throw new Error('No value found for specified path')
    }
    this.result.push(result)
  }

  get() {
    const traversal = new Traversal({ pathArray: this.path })
    traversal.traverse(this.callback, this.object)
    if (this.result.length === 1) {
      return this.result[0]
    } else {
      return this.result
    }
  }

}
