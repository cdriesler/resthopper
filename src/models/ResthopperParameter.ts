export default class ResthopperParameter {
    
    public guid: string = "";
    public name: string = "";
    public nickName: string = "";
    public description: string = "";
    public isOptional: boolean = false;
    public typeName: string = "";

    public sources: string[] = [];
    public values: string[] | number[] | boolean[] = [];

    public getSource(): string | undefined {
        return this.sources[0];
    }

    public setSource(source: string | ResthopperParameter ): void {
        if (typeof(source) == 'string') {
            this.sources = [source];
        }
        else {
            this.sources = [source.guid];
        }
    }

    public getValue(): any {
        return this.values;
    }

    private assertNumber(values: any[]): asserts values is number[] {
        values.forEach(x => {
            if (typeof(x) != 'number') {
                throw new Error("Parameter value is not a number.");
            }
        })
    }

    public getNumberValues(): number[] {
        this.assertNumber(this.values);
        return this.values;
    }

    public tryGetNumberValues(): number[] | undefined {
        this.values.forEach((x:any) => {
            if (typeof(x) != 'number') {
                return undefined;
            }
        });

        this.assertNumber(this.values);

        return this.values;
    }

}