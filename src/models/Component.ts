import { components } from './../utils/Components';
import { newGuid } from './../utils/Guid';
import Parameter from './Parameter';

type GrasshopperComponent =
    'Multiplication' |
    'Division'

export default class Component {

    public type: string;
    private guid: string;

    private inputCount: number;
    private outputCount: number;

    private inputSources: {
        [inputIndex: number]: string,
    }

    private inputGuids: {
        [inputIndex: number]: string,
    }

    private outputGuids: {
        [outputIndex: number]: string,
    }

    constructor(type: GrasshopperComponent) {
        this.type = type;
        this.guid = newGuid();

        const info = components[type];

        this.inputCount = info.inputCount;
        this.outputCount = info.outputCount;

        this.inputSources = {};

        this.inputGuids = {};
        for(let i = 0; i < this.inputCount; i++) {
            this.inputGuids[i] = newGuid();
        }

        this.outputGuids = {};
        for (let i = 0; i < this.outputCount; i++) {
            this.outputGuids[i] = newGuid();
        }
    }

    public getGuid(): string {
        return this.guid;
    }

    public getInputCount(): number {
        return this.inputCount;
    }

    public getOutputCount(): number {
        return this.outputCount;
    }

    public getSource(inputIndex: number): string {
        return this.inputSources[inputIndex];
    }

    public setSource(inputIndex: number, source: string | Parameter | Component, outputIndex?: number) {
        if (typeof(source) == 'string') {
            this.inputSources[inputIndex] = source;
        }
        else if (source instanceof Parameter) {
            this.inputSources[inputIndex] = source.getGuid();
        }
        else {
            this.inputSources[inputIndex] = source.getOutputGuid(outputIndex ?? 0);
        }
    }

    public getInputGuid(index: number): string {
        return this.inputGuids[index];
    }

    public getOutputGuid(index: number): string {
        return this.outputGuids[index];
    }
    
}