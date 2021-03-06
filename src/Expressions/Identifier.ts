/**
 * @module Parser
 */

import { getCallExpression } from '../utils'

/** @hidden */
const WHITE_LISTED = ['Object', 'ctx']

export default {
  toStatement (statement: any): object {
    if (WHITE_LISTED.indexOf(statement.name) > -1) {
      return statement
    }

    return getCallExpression([
      Object.assign({}, statement, {
        type: 'Literal',
        value: statement.name,
        raw: `'${statement.name}'`,
      }),
    ], 'resolve')
  },
}
