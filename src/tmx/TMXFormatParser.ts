// import parser from "fast-xml-parser";
import { isObject } from "util";
import {parseString} from "xml2js";
import ILocFormatParser from "../base/ILocFormatParser";
import TMXSegment from "./TMXSegment";

export default class TMXFormatParser implements ILocFormatParser<TMXSegment> {
    public async Parse(sourceText: string): Promise<TMXSegment[] | null> {
        const result: TMXSegment[] | null = [];
        // (?<=<seg>) does not work in Safari
        const matches: RegExpMatchArray = sourceText.match(/<seg>[\s\S]*?(?=<\/seg>)/gm)!;
        let jsonText: any;
        parseString(sourceText, (err, rtn) => jsonText = rtn);
        jsonText.tmx.body[0].tu.forEach((t: any, i: any) => {
            const Props: {[index: string]: string} = {};
            if (t.prop !== undefined) {
                Object.keys(t.prop).forEach((v, i2) => Props[t.prop[i2].$.type] = t.prop[i2]._);
            }
            const seg = new TMXSegment();
            seg.FormatIndex = i;
            seg.Source = isObject(t.tuv[0].seg[0]) ? matches[i * 2].substring("<seg>".length) : t.tuv[0].seg[0];
            // tslint:disable-next-line:max-line-length
            seg.Translation = isObject(t.tuv[1].seg[0]) ? matches[(i * 2 + 1)].substring("<seg>".length) : t.tuv[1].seg[0],
            seg.Props = Props;
            (result as TMXSegment[]).push(seg);
        });
        return result;
    }
}
