import Get from './get';
import Path from './path';

export default class JEO {
  get(object, pathString) {
    const path = new Path(pathString).getPath()
    return new Get({ object, path }).get()
  }
}
