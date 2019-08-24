import ISegment from "./ISegment";

export default interface ILocFormat<T extends ISegment> {
    SourceText: string | null;
    Name?: string;
    FormatType: string | null; // tmx
    Segments: T[] | null;
    GeneratedText: string | null;
    Parse(): Promise<void>;
    Generate(): Promise<void>;
}
