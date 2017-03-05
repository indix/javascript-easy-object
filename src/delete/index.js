import Traversal from '../traversal';

export default class Delete extends Traversal{

  constructor(props) {
    super(props)
    this.object = props.object
    this.path = props.path
  }

  processTraverse(object, par, property) {
    delete par[property]
  }

  delete() {
    this.traverse(this.object)
    return this.object
  }

}
