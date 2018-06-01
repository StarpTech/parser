"use strict";
/**
 * @module Parser
 */
/*
* edge-lexer
*
* (c) Harminder Virk <virk@adonisjs.com>
*
* For the full copyright and license information, please view the LICENSE
* file that was distributed with this source code.
*/
class EdgeBuffer {
    constructor() {
        this.lines = '';
        this.indentSpaces = 2;
    }
    /**
     * Indent output by 2 spaces
     */
    indent() {
        this.indentSpaces += 2;
    }
    /**
     * Decrease upcoming line indentation by
     * 2 spaces
     */
    dedent() {
        this.indentSpaces -= 2;
    }
    /**
     * Write a new line to the output
     */
    writeLine(text) {
        this.lines += `\n${this.getSpace()}out += ${text}`;
    }
    /**
     * Write a new statement. Statements are not written to the
     * output. `if (something) {` is a statement.
     */
    writeStatement(text) {
        this.lines += `\n${this.getSpace()}${text}`;
    }
    /**
     * Write string as interpolation to the output
     */
    writeInterpol(text) {
        this.lines += `\n${this.getSpace()}out += \`\${${text}}\``;
    }
    /**
     * Return all the lines from the buffer wrapped inside a self
     * invoked function.
     */
    flush() {
        let returnValue = '(function (ctx) {';
        returnValue += `\n  let out = ''`;
        returnValue += `${this.lines}`;
        returnValue += '\n  return out';
        returnValue += '\n})(ctx)';
        /**
         * Reset internal props.
         */
        this.lines = '';
        this.indentSpaces = 2;
        return returnValue;
    }
    /**
     * Returns the number of spaces to the added to the current line for
     * pretty identation.
     */
    getSpace() {
        let spaces = '';
        for (let i = 0; i < this.indentSpaces; i++) {
            spaces += ' ';
        }
        return spaces;
    }
}
module.exports = EdgeBuffer;
