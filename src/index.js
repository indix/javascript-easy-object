import Put from './put'
import Get from './get'
import Path from './path'
import Rename from './rename'
import Delete from './delete'

export default class JEO {

  constructor(delimitor) {
    this.delimitor = delimitor || '\\.'
  }

  get(object, pathString) {
    const path = new Path(pathString, this.delimitor).getPath()
    return new Get({ object, path }).get()
  }

  put(object, pathString, value) {
    const path = new Path(pathString, this.delimitor).getPath()
    return new Put({ object, path, value }).put()
  }

  delete(object, pathString) {
    const path = new Path(pathString, this.delimitor).getPath()
    return new Delete({ object, path }).delete()
  }

  rename(object, pathString, key) {
    const path = new Path(pathString, this.delimitor).getPath()
    return new Rename({ object, path, key }).renameKey()
  }

}
