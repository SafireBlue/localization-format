import ISegment from "./ISegment";
import IText from "./IText";

export default abstract class AbstractSegment implements ISegment {
    public get Source(): string | IText {
        return this.source;
    }
    public set Source(value: string | IText) {
        this.source = value;
    }
    public get Translation(): string | IText {
        return this.translation;
    }
    public set Translation(value: string | IText) {
        this.translation = value;
    }
    public FormatIndex!: number | null;
    public Props!: { [index: string]: string; } | null;
    private source!: string | IText;
    private translation!: string | IText;
}
