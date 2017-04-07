import Traversal from '../traversal';

export default class GetPath extends Traversal{

  constructor(props) {
    super(props)
    this.object = props.object
    this.path = props.path
    this.delimitor = props.delimitor
    this.result = []
  }

  processTraverse(object, par, property, path) {
    if (object) {
      this.result.push(path.join(this.delimitor))
    }
  }

  getPath() {
    this.traverse(this.object)
    return this.result
  }

}
