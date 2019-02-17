/* eslint no-unused-expressions: 0 */

import { expect } from 'chai'
import { randonPhrase } from './index'

describe('MotivaAi', () => {
  describe('MotivaAi.randonPhrase()', () => {
    it('should exist the randonPhrase method', () => {
      expect(randonPhrase).to.exist
    })

    it('should randonPhrase() returns an array', () => {
      expect(randonPhrase()).to.be.an('array')
    })

    it('should randonPhrase() returns an empty array', () => {
      expect(randonPhrase()).not.to.be.empty
    })

    it('should randonPhrase()[0] to have keys `quote` and `author`', () => {
      expect(randonPhrase()[0]).to.have.keys('quote', 'author')
    })

    it('should Object.keys(randonPhrase(5)) to have length of 5', () => {
      expect(Object.keys(randonPhrase(5))).to.have.lengthOf(5)
    })

    it('should randonPhrase()[0].quote to be a string', () => {
      const { quote } = randonPhrase()[0]
      expect(quote).to.be.a('string')
    })
  })
})
