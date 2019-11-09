import ResthopperComponent from '../models/ResthopperComponent';

export default class ComponentIndex {

    public static createComponent(type: GrasshopperComponent): ResthopperComponent {
        switch(type) {
            case "Multiplication":
                return new ResthopperComponent();
            case "Division":
                return new ResthopperComponent();
            default:
                throw new Error("Selected component is not supported by resthopper.");
        }
    }

}

export type GrasshopperComponent = "Multiplication" | "Division";