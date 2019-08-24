import AbstractLocFormat from "../base/AbstractLocFormat";
import TMXFormatGenerator from "./TMXFormatGenerator";
import TMXFormatParser from "./TMXFormatParser";
import TMXSegment from "./TMXSegment";

export default class TMXFormat extends AbstractLocFormat<TMXSegment, TMXFormatParser, TMXFormatGenerator> {
    public FormatType: string = "tmx";
    constructor(sourceText: string, name?: string) {
        super(sourceText, TMXFormatParser, TMXFormatGenerator);
    }
}
