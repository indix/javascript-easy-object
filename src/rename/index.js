import Traversal from '../traversal';

export default class RenameKey extends Traversal {

  constructor(props) {
    super(props)
    this.key = props.key
    this.path = props.path
    this.object = props.object
  }

  processTraverse(object, par, property) {
    if (typeof par !== 'object') return
    if (par[this.key]) {
      throw new Error(`Property - ${this.name} is already present`)
    } else {
      par[this.key] = par[property]
      delete par[property]
    }
  }

  renameKey() {
    this.traverse(this.object)
    return this.object
  }

}
