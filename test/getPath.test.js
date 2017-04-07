import { expect } from 'chai'

import JEO from '../src'

const object = {
  a: {
    v: 'a',
    b: {
      z: 'z1'
    },
    c: {
      z: 'z2'
    },
    d: {
      z: 'z3'
    }
  }
}

describe('JS easy object Get Path', () => {

  it('should return correct value', (done) => {
    const jeo = new JEO('.')
    const result = jeo.getPath(object, 'a.b.z')
    expect(result).to.be.deep.equal(['a.b.z'])
    done()
  })

  it('should return filtered property value', (done) => {
    const jeo = new JEO('.')
    const result = jeo.getPath(object, 'a.[b, d].z')
    expect(result).to.be.deep.equal(['a.b.z', 'a.d.z'])
    done()
  })

  it('should skip a level and find the given path value', (done) => {
    const jeo = new JEO('.')
    const result = jeo.getPath(object, '?.?.z')
    expect(result).to.be.deep.equal(['a.b.z', 'a.c.z', 'a.d.z'])
    done()
  })

  it('should skip any level and find the given path value', (done) => {
    const jeo = new JEO()
    const result = jeo.get(object, 'a\\.*\\.z')
    expect(result).to.be.deep.equal(['z1', 'z2', 'z3'])
    done()
  })

});
