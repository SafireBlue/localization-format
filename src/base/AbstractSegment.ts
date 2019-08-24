import ISegment from "./ISegment";
import IText from "./IText";

export default abstract class AbstractSegment implements ISegment {
    public FormatIndex!: number | null;
    public Props!: { [index: string]: string; } | null;
    public Source!: string | IText;
    public Translation!: string | IText;
}
