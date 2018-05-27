/**
 * @module Parser
 */
import EdgeBuffer from '../EdgeBuffer';
import Contracts from 'edge-lexer/build/Contracts';
interface IParser {
    parseStatement(statement: any): any;
    parseTemplate(template: string): string;
    statementToString(statement: any): string;
    processToken(token: Contracts.IBlockNode | Contracts.IMustacheNode | Contracts.INode, buffer: EdgeBuffer): void;
}
interface ITag {
    block: boolean;
    seekable: boolean;
    name: boolean;
    compile(parser: IParser, buffer: EdgeBuffer, token: Contracts.IBlockNode): void;
    run(): any;
}
export { IParser as IParser };
export { ITag as ITag };
