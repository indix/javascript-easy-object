import { expect } from 'chai'

import JEO from '../src';

describe('JS easy object Delete', () => {

  it('should delete value at any level', (done) => {
    const jeo = new JEO()
    const result = jeo.delete({ a: { b: { c: 'c' } } }, 'a\\.b')
    expect(result).to.be.deep.equal({ a: { } })
    done()
  })

  it('should delete filtered property value', (done) => {
    const jeo = new JEO()
    const result = jeo.delete({ a: { b: { z: 'z'}, d: {z: 'Z' } } }, 'a\\.[b, d]\\.z')
    expect(result).to.be.deep.equal({ a: { b: {}, d: {} } })
    done()
  })

  it('should skip a level and delete the given path value', (done) => {
    const jeo = new JEO()
    const result = jeo.delete({
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
    '?\\.?\\.z')
    expect(result).to.be.deep.equal({ a: { b: {}, c: {}, d: 'x' } })
    done()
  })

  it('should skip any level and delete the given path value', (done) => {
    const jeo = new JEO()
    const result = jeo.delete({
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
    'a\\.*\\.z')
    expect(result).to.be.deep.equal({ a: { b: {}, c: {}, d: 'x', e: { f: {} } } })
    done()
  })

  it('should throw error on unknown path', (done) => {
    expect(() => new JEO().delete({ a: { b: 'c' } }, 'a\\.c\\.d')).to.throw(Error)
    done()
  })

})
