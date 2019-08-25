import {
    LocFormatCheckResult,
    QADuplicateCheckResult,
    QADuplicateFromLocFormat,
    TargetValue,
} from "translation-checker";
import ILocFormat from "./ILocFormat";
import ILocFormatGenerator from "./ILocFormatGenerator";
import ILocFormatParser from "./ILocFormatParser";
import ISegment from "./ISegment";

export default abstract class AbstractLocFormat<
                                T extends ISegment,
                                S extends ILocFormatParser<T>,
                                R extends ILocFormatGenerator
                              > implements ILocFormat<T> {
    public SourceText!: string | null;
    public Name?: string;
    public abstract FormatType: string | null;
    public Segments!: T[] | null;
    public GeneratedText!: string | null;
    public LocFormatCheckResults?: LocFormatCheckResult[];
    private parser: S;
    private generator: R;
    protected constructor(sourceText: string,
                          locFormatParser: new () => S,
                          locFormatGenerator: new () => R,
                          name?: string) {
        this.SourceText = sourceText;
        this.parser = new locFormatParser();
        this.generator = new locFormatGenerator();
        this.Name = name;
    }
    public async Parse(): Promise<void> {
        this.Segments = await this.parser.Parse(this.SourceText!);
    }
    public async Generate(): Promise<void> {
        this.GeneratedText = await this.generator.Generate(this);
    }
    public async Check(): Promise<void> {
        const segCheck = (async () => this.Segments!.forEach((seg) => seg.Check()))();
        const result = await Promise.all([
            QADuplicateFromLocFormat(this, TargetValue.Source),
            QADuplicateFromLocFormat(this, TargetValue.Translation),
        ]).then((res) => res.filter((r) => r !== null));
        await segCheck;
        this.LocFormatCheckResults = result as LocFormatCheckResult[];
    }
}
