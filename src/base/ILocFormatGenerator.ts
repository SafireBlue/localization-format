import ILocFormat from "./ILocFormat";
import ISegment from "./ISegment";

export default interface ILocFormatGenerator {
    Generate(format: ILocFormat<ISegment>): Promise<string | null>;
}
