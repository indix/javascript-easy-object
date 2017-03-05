import Traversal from '../traversal';

export default class Put extends Traversal {

  constructor(props) {
    super(props)
    this.path = props.path
    this.value = props.value
    this.object = props.object
  }

  processTraverse(object, par, property) {
    if (typeof par === 'object') {
      par[property] = this.value
    }
  }

  put() {
    this.traverse(this.object)
    return this.object
  }

}
