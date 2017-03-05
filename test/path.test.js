import { expect } from 'chai'

import Path from '../src/path';

describe('Path', () => {

  it('should create path array', (done) => {
    const path = new Path('a\\.b', '\\.').getPath()
    expect(path).to.be.deep.equal(['a', 'b'])
    done()
  });

  it('should create path with filter key option', (done) => {
    const path = new Path('a.b.[c, d].e', '.').getPath()
    expect(path).to.be.deep.equal(['a', 'b', ['c', 'd'], 'e'])
    done()
  });

  it('should throw error for syntax mismatch', (done) => {
    expect(() =>new Path('a\\.b\\.[c, d\\.e', '\\.').getPath()).to.throw(Error)
    done()
  });

})
