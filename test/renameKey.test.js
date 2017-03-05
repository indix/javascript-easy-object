import { expect } from 'chai'

import JEO from '../src';

describe('JS easy object Delete', () => {

  it('should rename key at any level', (done) => {
    const jeo = new JEO()
    const result = jeo.rename({ a: { b: { c: 'c' } } }, 'a\\.b', 'B')
    expect(result).to.be.deep.equal({ a: { B: { c: 'c' } } })
    done()
  })

  it('should rename filtered property key', (done) => {
    const jeo = new JEO()
    const result = jeo.rename({ a: { b: { z: 'z'}, d: { z: 'Z' } } }, 'a\\.[b, d]\\.z', 'Z')
    expect(result).to.be.deep.equal({ a: { b: { Z: 'z'}, d: { Z: 'Z' } } })
    done()
  })

  it('should skip a level and rename the given path key', (done) => {
    const jeo = new JEO()
    const result = jeo.rename({
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
    '?\\.?\\.z', 'Z')
    expect(result).to.be.deep.equal({ a: { b: { Z: 'z' }, c: { Z: { y: 'Y' } }, d: 'x' } })
    done()
  })

  it('should skip any level and rename the given path key', (done) => {
    const jeo = new JEO()
    const result = jeo.rename({
      a: {
        b: {
          z: 'z'
        },
        c: {
          z: {
            y: 'Y'
          }
        },
        d: 'x',
        e: {
          f: {
            z: 'M'
          }
        }
      }
    },
    'a\\.*\\.z', 'Z')
    expect(result).to.be.deep.equal({ a: { b: { Z: 'z' }, c: { Z: { y: 'Y'} }, d: 'x', e: { f: { Z: 'M' } } } })
    done()
  })

  it('should throw error on unknown path', (done) => {
    expect(() => new JEO().rename({ a: { b: 'c', c: { d: 'e' } } }, 'a\\.b', 'c')).to.throw(Error)
    done()
  })

})
