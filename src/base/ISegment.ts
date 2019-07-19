import IText from "./IText";

export default interface ISegment {
    FormatIndex?: number  | null;
    Source: IText | string;
    Translation: IText | string;
    Props?: {[index: string]: string} | null;
}
