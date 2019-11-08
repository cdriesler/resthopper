import ResthopperParam from "./ResthopperParam";
import ResthopperComponentParam from "./ResthopperComponentParam";

export default class ParamBase {
    public sources: string[] = [];

    public getSource(): string | undefined {
        return this.sources[0];
    }

    public setSource(source: string | ResthopperParam | ResthopperComponentParam): void {
        if (typeof(source) == 'string') {
            this.sources = [source];
        }
        else {
            this.sources = [source.guid];
        }
    }
}