import ISegment from "./ISegment";

export default interface ILocFormat<T extends ISegment> {
    SourceText: string | null;
    FormatType: string | null; // tmx
    Segments: T[] | null;
    TranslatedSegments: T[] | null;
    GeneratedTranslatedText: string | null;
    Parse(): Promise<void>;
}
