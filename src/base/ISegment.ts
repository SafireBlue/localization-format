import { SegmentCheckResult } from "translation-checker";
import IText from "./IText";

export default interface ISegment {
    FormatIndex?: number  | null;
    Source: string | IText;
    Translation: string | IText;
    Props?: {[index: string]: string} | null;
    SegmentCheckResults?: SegmentCheckResult[];
    Check(): Promise<void>;
}
