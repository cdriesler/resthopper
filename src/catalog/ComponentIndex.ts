import ResthopperComponent from '../models/ResthopperComponent';
import { Multiplication } from './components/Multiplication';

export default class ComponentIndex {

    public static createComponent(type: GrasshopperComponent): Multiplication | undefined {
        switch(type) {
            case "Multiplication":
                return new Multiplication();
            default:
                return undefined;
        }
    }

}

export type GrasshopperComponent = "Multiplication" | "Division";