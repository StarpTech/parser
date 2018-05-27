"use strict";
/**
 * @module Parser
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    toStatement(statement, parser) {
        statement.elements = statement.elements.map((element) => parser.parseStatement(element));
        return statement;
    },
};
