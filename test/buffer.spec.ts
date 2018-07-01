/*
 * edge-parser
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

import * as test from 'japa'
import * as dedent from 'dedent'
import { EdgeBuffer } from '../src/EdgeBuffer'

test.group('Parser', () => {
  test('write line to the output', (assert) => {
    const buff = new EdgeBuffer()
    buff.writeLine(`'hello world'`)

    assert.equal(buff.flush(), dedent`(function (template, ctx) {
      let out = ''
      out += 'hello world'
      return out
    })(template, ctx)`)
  })

  test('write raw line to the output', (assert) => {
    const buff = new EdgeBuffer()
    buff.writeRaw('hello world')

    assert.equal(buff.flush(), dedent`(function (template, ctx) {
      let out = ''
      out += 'hello world'
      return out
    })(template, ctx)`)
  })

  test('escape quotes in raw line', (assert) => {
    const buff = new EdgeBuffer()
    buff.writeRaw(`'hello world'`)

    assert.equal(buff.flush(), dedent`(function (template, ctx) {
      let out = ''
      out += '\'hello world\''
      return out
    })(template, ctx)`)
  })

  test('write statement', (assert) => {
    const buff = new EdgeBuffer()
    buff.writeStatement('if (username) {')

    assert.equal(buff.flush(), dedent`(function (template, ctx) {
      let out = ''
      if (username) {
      return out
    })(template, ctx)`)
  })

  test('indent output', (assert) => {
    const buff = new EdgeBuffer()
    buff.writeStatement('if (username) {')
    buff.indent()
    buff.writeRaw('hello world')
    buff.dedent()
    buff.writeStatement('}')

    assert.equal(buff.flush(), dedent`(function (template, ctx) {
      let out = ''
      if (username) {
        out += 'hello world'
      }
      return out
    })(template, ctx)`)
  })
})
