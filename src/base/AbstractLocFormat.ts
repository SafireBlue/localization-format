import ILocFormat from "./ILocFormat";
import ILocFormatParser from "./ILocFormatParser";
import ISegment from "./ISegment";

// tslint:disable-next-line:max-line-length
export default abstract class AbstractLocFormat<T extends ISegment, S extends ILocFormatParser<T>> implements ILocFormat<T> {
    public SourceText!: string | null;
    public abstract FormatType: string | null;
    public Segments!: T[] | null;
    public TranslatedSegments!: T[] | null;
    public GeneratedTranslatedText!: string | null;
    private parser: S;
    protected constructor(sourceText: string, locFormatParser: new () => S) {
        this.SourceText = sourceText;
        this.parser = new locFormatParser();
    }
    public async Parse(): Promise<void> {
        this.Segments = await this.parser.Parse(this.SourceText!);
        this.SourceText = "";
    }
}
