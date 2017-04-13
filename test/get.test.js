import { expect } from 'chai'

import JEO from '../src'

describe('JS easy object Get', () => {

  it('should return correct value', (done) => {
    const jeo = new JEO()
    const result = jeo.get({ a: { b: 'c' } }, 'a\\.b')
    expect(result).to.be.deep.equal('c')
    done()
  })

  it('should return filtered property value', (done) => {
    const jeo = new JEO()
    const result = jeo.get({ a: { b: { z: 'z'}, d: {z: 'Z' } } }, 'a\\.[b, d]\\.z')
    expect(result).to.be.deep.equal(['z', 'Z'])
    done()
  })

  it('should throw error on unknown path', (done) => {
    expect(() => new JEO().get({ a: { b: 'c' } }, 'a\\.c')).to.throw(Error)
    done()
  })

  it('should skip a level and find the given path value', (done) => {
    const jeo = new JEO()
    const result = jeo.get({
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
    expect(result).to.be.deep.equal([ 'z', { y: 'Y' } ])
    done()
  })

  it('should skip any level and find the given path value', (done) => {
    const jeo = new JEO()
    const result = jeo.get({
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
    expect(result).to.be.deep.equal([ 'z', { y: 'Y' }, 'M' ])
    done()
  })

  it('should should return null for unknown path when it is in safe mode', (done) => {
    const jeo = new JEO()
    const result = jeo.get({ a: 'a' }, 'a\\.b\\.c\\.d', true)
    expect(result).to.be.equal(null)
    done()
  })

})
