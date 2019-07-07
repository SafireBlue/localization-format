import AbstractLocFormat from "../base/AbstractLocFormat";
import TMXFormatParser from "./TMXFormatParser";
import TMXSegment from "./TMXSegment";

export default class TMXFormat extends AbstractLocFormat<TMXSegment, TMXFormatParser> {
    public FormatType: string = "tmx";
    constructor(sourceText: string) {
        super(sourceText, TMXFormatParser);
    }
}
