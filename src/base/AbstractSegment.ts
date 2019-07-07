import ISegment from "./ISegment";
import IText from "./IText";

export default abstract class AbstractSegment implements ISegment {
    public FormatIndex!: number | null;
    public Source: IText = {Value: "", BeginOffSet: null};
    public Translation: IText  = {Value: "", BeginOffSet: null};
    public Props!: { [index: string]: string; } | null;
}
