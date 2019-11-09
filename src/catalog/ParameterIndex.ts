import { Number } from './parameters/Number';

export default class ParameterIndex {

    public static createParameter(type: GrasshopperParameter, value?: any): Number {
        switch(type) {
            case "Number":
                return new Number(value);
            default:
                throw new Error("Selected component is not supported by resthopper.")
        }
    }
}

export { Number } from './parameters/Number';

export type GrasshopperParameter = "Number" | "Boolean"