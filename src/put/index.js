import Traversal from '../traversal';

export default class Put extends Traversal {

  constructor(props) {
    super(props)
    this.object = props.object
    this.path = props.path
    this.value = props.value
    this.result = []
  }

  processTraverse(object, par, property) {
    par[property] = this.value
  }

  put() {
    this.traverse(this.object)
    return this.object
  }

}
