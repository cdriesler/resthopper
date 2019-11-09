export default class ParameterIndex {

    public static createParameter(type: GrasshopperParameter, value?: any): any {
        return {};
    }
}

export type GrasshopperParameter = "Number" | "Boolean";

// import { NumberParam } from './parameters/Number';

// export default class ParameterIndex {

//     public static createParameter(type: GrasshopperParameter, value?: any): NumberParam {
//         switch(type) {
//             case "Number":
//                 return new NumberParam(value);
//             default:
//                 throw new Error("Selected component is not supported by resthopper.")
//         }
//     }
// }

// export { NumberParam } from './parameters/Number';

// export type GrasshopperParameter = "Number" | "Boolean"