import IText from "./IText";

export default interface ISegment {
    FormatIndex?: number  | null;
    Source: string | IText;
    Translation: string | IText;
    Props?: {[index: string]: string} | null;
}
