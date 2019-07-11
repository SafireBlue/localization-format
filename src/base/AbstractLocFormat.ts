import ILocFormat from "./ILocFormat";
import ILocFormatGenerator from "./ILocFormatGenerator";
import ILocFormatParser from "./ILocFormatParser";
import ISegment from "./ISegment";

// tslint:disable-next-line:max-line-length
export default abstract class AbstractLocFormat<T extends ISegment, S extends ILocFormatParser<T>, R extends ILocFormatGenerator> implements ILocFormat<T> {
    public SourceText!: string | null;
    public abstract FormatType: string | null;
    public Segments!: T[] | null;
    public GeneratedText!: string | null;
    private parser: S;
    private generator: R;
    protected constructor(sourceText: string, locFormatParser: new () => S, locFormatGenerator: new () => R) {
        this.SourceText = sourceText;
        this.parser = new locFormatParser();
        this.generator = new locFormatGenerator();
    }
    public async Parse(): Promise<void> {
        this.Segments = await this.parser.Parse(this.SourceText!);
    }
    public async Generate(): Promise<void> {
        this.GeneratedText = await this.generator.Generate(this);
    }
}
