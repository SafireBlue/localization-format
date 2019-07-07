import ISegment from "./ISegment";

export default interface ILocFormatParser<T extends ISegment> {
    Parse(sourceText: string): Promise<T[] | null>;
}
