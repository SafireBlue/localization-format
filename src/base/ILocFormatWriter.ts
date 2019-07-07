import ILocFormat from "./ILocFormat";
import ISegment from "./ISegment";

export default interface ILocFormatWriter {
    Write(format: ILocFormat<ISegment>): ILocFormat<ISegment>;
}
