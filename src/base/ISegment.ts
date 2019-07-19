import IText from "./IText";

export default interface ISegment {
    FormatIndex?: number  | null;
    Source: IText;
    Translation: IText;
    Props?: {[index: string]: string} | null;
}
