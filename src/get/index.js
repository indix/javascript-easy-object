import Traversal from '../traversal';

export default class Get extends Traversal{

  constructor(props) {
    super(props)
    this.object = props.object
    this.path = props.path
    this.result = []
    this.isSafe = props.isSafe
  }

  processTraverse(result) {
    if (!this.isSafe && result === undefined && !this.result.length) {
      throw new Error('No value found for specified path')
    } else if (result) {
      this.result.push(result)
    }
  }

  get() {
    this.traverse(this.object)
    if (!this.result.length) return null
    if (this.result.length === 1) return this.result[0]
    return this.result
  }

}
