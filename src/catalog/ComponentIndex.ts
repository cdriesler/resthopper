import ResthopperComponent from '../models/ResthopperComponent';
import { Multiplication } from './components/Multiplication';
import { Division } from './components/Division'

export default class ComponentIndex {

    public static Types = [
        Multiplication,
        Division
    ]

    public static createComponent(type: GrasshopperComponent): ResthopperComponent {
        switch(type) {
            case "Multiplication":
                return new Multiplication();
            case "Division":
                return new Division();
            default:
                throw new Error("Selected component is not supported by resthopper.");
        }
    }

}

export { Multiplication } from './components/Multiplication';

export type GrasshopperComponent = "Multiplication" | "Division";