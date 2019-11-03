import { newGuid } from './../utils/Guid';
import Component from './Component';

type GrasshopperParameter = 'Number' | 'Boolean';

export default class Parameter {

    public name: string;
    public type: GrasshopperParameter;
    public source: string | undefined;

    private guid: string;
    private value: string | number | boolean;

    public isOutput: boolean;
    public isInput: boolean;

    constructor(name: string, type: GrasshopperParameter, value?: string | number | boolean) {
        this.name = name;
        this.type = type;
        this.value = value ?? "";

        this.guid = newGuid();
        this.isOutput = false;
        this.isInput = false;
    }

    getGuid(): string {
        return this.guid;
    }

    public setSource(source: Parameter | Component | string, outputIndex?: number): void {
        if (typeof(source) == 'string') {
            this.source = source;
        }
        else if (source instanceof Parameter) {
            this.source = source.getGuid();
        }
        else {
            this.source = source.getOutputGuid(outputIndex ?? 0);
        }
    }

    public getValue(): any {
        return this.value;
    }

    public getNumberValue(): number {
        this.assertNumber(this.value);
        return this.value;
    }

    public getNumberValueOrDefault(): number | undefined {
        if (typeof(this.value) != 'number') {
            return undefined;
        }
        else {
            return this.value;
        }
    }

    private assertNumber(value: any): asserts value is number {
        if (typeof(value) != 'number') {
            throw new Error("Parameter value is not a number.");
        }
    }

}