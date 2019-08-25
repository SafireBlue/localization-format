import {
    FindWhat,
    FindWordsFromSegment,
    QADiffFromSegment,
    QANoTranslationFromSegment,
    SegmentCheckResult,
} from "translation-checker";
import ISegment from "./ISegment";
import IText from "./IText";

export default abstract class AbstractSegment implements ISegment {
    public FormatIndex!: number | null;
    public Props!: { [index: string]: string; } | null;
    public Source!: string | IText;
    public Translation!: string | IText;
    public SegmentCheckResults?: SegmentCheckResult[];
    public async Check(): Promise<void> {
        const result = await Promise.all([
            QADiffFromSegment(this, FindWhat.AllCapsWords),
            QADiffFromSegment(this, FindWhat.AlphanumericWords),
            QADiffFromSegment(this, FindWhat.CamelCaseWords),
            QADiffFromSegment(this, FindWhat.Markups),
            QADiffFromSegment(this, FindWhat.Numbers),
            QADiffFromSegment(this, FindWhat.Spaces),
            QADiffFromSegment(this, FindWhat.Urls),
            QANoTranslationFromSegment(this),
            FindWordsFromSegment(this, FindWhat.RepeatedWords),
        ]).then((res) => res.filter((r) => r !== null));
        this.SegmentCheckResults = result as SegmentCheckResult[];
    }
}
