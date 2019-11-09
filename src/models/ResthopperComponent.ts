import ResthopperParameter from './ResthopperParameter';

export default class ResthopperComponent {
    public guid: string = "";
    public name: string = "";
    public nickName: string = "";
    public description: string = "";
    public category: string = "";
    public subCategory: string = "";
    public isObsolete: boolean = false;

    public input: { [name: string]: ResthopperParameter } = {};
    public output: { [name: string]: ResthopperParameter } = {};

    getInputByIndex(index: number): ResthopperParameter | undefined {
        return this.input[Object.keys(this.input)[index]];
    }

    setInputByIndex(index: number, source: string | ResthopperParameter): void {
        this.getInputByIndex(index)?.setSource(source);
    }

    getOutputByIndex(index: number): ResthopperParameter | undefined {
        return this.output[Object.keys(this.output)[index]];
    }
}
