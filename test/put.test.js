import { expect } from 'chai'

import JEO from '../src';

xdescribe('JS easy object Put', () => {

  it('should put value at any level', (done) => {
    const jeo = new JEO()
    const result = jeo.put({ a: { b: { c: 'c' } } }, 'a\\.b', 'DDD')
    expect(result).to.be.deep.equal({ a: { b: 'DDD' } })
    done()
  })

  it('should put value even at last level', (done) => {
    const jeo = new JEO()
    const result = jeo.put({ a: { b: { c: 'c' } } }, 'a\\.b\\.c', 'CCC')
    expect(result).to.be.deep.equal({ a: { b: { c: 'CCC' } } })
    done()
  })

  it('should put value even at new property', (done) => {
    const jeo = new JEO()
    const result = jeo.put({ a: { b: { c: 'c' } } }, 'a\\.d', 'DDD')
    expect(result).to.be.deep.equal({ a: { b: { c: 'c' }, d: 'DDD' } })
    done()
  })

  it('should throw error', (done) => {
    const jeo = new JEO()
    const result = jeo.put({ a: { b: { c: 'c' } } }, 'a\\.d', 'DDD')
    expect(() => jeo.put({ a: { b: { c: 'c' } } }, 'a\\.d\\.e', 'DDD')).to.throw(Error)
    done()
  })

})
