import { LocFormatCheckResult } from "translation-checker";
import ISegment from "./ISegment";

export default interface ILocFormat<T extends ISegment> {
    SourceText: string | null;
    Name?: string;
    FormatType: string | null; // tmx
    Segments: T[] | null;
    GeneratedText: string | null;
    LocFormatCheckResults?: LocFormatCheckResult[];
    Parse(): Promise<void>;
    Generate(): Promise<void>;
    Check(): Promise<void>;
}
