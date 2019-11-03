import { grasshopperObjectTable } from './Guid';

interface GrasshopperComponentInfo {
    [type: string]: {
        guid: string,
        inputCount: number,
        outputCount: number,
    }
}

export const components: GrasshopperComponentInfo = {
    "Multiplication": {
        guid: grasshopperObjectTable["Multiplication"].guid,
        inputCount: 2,
        outputCount: 1
    }
}