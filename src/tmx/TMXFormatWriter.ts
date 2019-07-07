import ILocFormat from "../base/ILocFormat";
import ILocFormatWriter from "../base/ILocFormatWriter";
import ISegment from "../base/ISegment";

export default class TMXFormatWriter implements ILocFormatWriter {
     public Write(format: ILocFormat<ISegment>): ILocFormat<ISegment> {
        let text: string = format.SourceText!;
        format.TranslatedSegments!.forEach((v, i) => {
            let counter: number = 0;
            // tslint:disable-next-line:max-line-length
            text = text.replace(/(<seg>)[\s\S]*?(<\/seg>)/gm,
            (m, p1, p2) => {
                let result: string = m;
                if (i * 2 + 1 === counter) {
                    result = p1 + v.Translation.Value + p2;
                }
                counter++;
                return result;
            });
        });
        format.GeneratedTranslatedText = text;
        return format;
    }
}
