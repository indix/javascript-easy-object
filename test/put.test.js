import { expect } from 'chai'

import JEO from '../src';

describe('JS easy object Put', () => {

  it('should put value at any level', (done) => {
    const jeo = new JEO()
    const result = jeo.put({ a: { b: { c: 'c' } } }, 'a\\.b', 'DDD')
    expect(result).to.be.deep.equal({ a: { b: 'DDD' } })
    done()
  })

  it('should put filtered property value', (done) => {
    const jeo = new JEO()
    const result = jeo.put({ a: { b: { z: 'z'}, d: {z: 'Z' } } }, 'a\\.[b, d]\\.z', 'ZZ')
    expect(result).to.be.deep.equal({ a: { b: { z: 'ZZ' }, d: { z: 'ZZ' } } })
    done()
  })

  it('should skip a level and put the given path value', (done) => {
    const jeo = new JEO()
    const result = jeo.put({
      a: {
        b: {
          z: 'z'
        },
        c: {
          z: {
            y: 'Y'
          }
        },
        d: 'x'
      }
    },
    '?\\.?\\.z', 'ZZ')
    expect(result).to.be.deep.equal({ a: { b: { z: 'ZZ' }, c: { z: 'ZZ' }, d: 'x' } })
    done()
  })

  it('should throw error on unknown path', (done) => {
    expect(() => new JEO().get({ a: { b: 'c' } }, 'a\\.c')).to.throw(Error)
    done()
  })

})
