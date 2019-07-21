import ILocFormat from "../base/ILocFormat";
import ILocFormatGenerator from "../base/ILocFormatGenerator";
import ISegment from "../base/ISegment";

export default class TMXFormatGenerator implements ILocFormatGenerator {
     public async Generate(format: ILocFormat<ISegment>): Promise<string | null> {
        let text: string = format.SourceText!;
        format.Segments!.forEach((v, i) => {
            let counter: number = 0;
            // tslint:disable-next-line:max-line-length
            text = text.replace(/(<seg>)[\s\S]*?(<\/seg>)/gm,
            (m, p1, p2) => {
                let result: string = m;
                if (i * 2 + 1 === counter) {
                    result = p1 + v.Translation + p2;
                }
                counter++;
                return result;
            });
        });
        return text;
    }
}
