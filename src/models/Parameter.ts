import { newGuid } from './../utils/Guid';

type ParameterType = 'number' | 'boolean';

export default class Parameter {

    public name: string;
    public type: ParameterType;
    private value: string | number | boolean;

    private guid: string;
    public isOutput: boolean;
    public isInput: boolean;

    constructor(name: string, type: ParameterType, value?: string | number | boolean) {
        this.name = name;
        this.type = type;
        this.value = value ?? "";

        this.guid = newGuid();
        this.isOutput = false;
        this.isInput = false;
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