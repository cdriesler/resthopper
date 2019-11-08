import ResthopperComponent from '../models/ResthopperComponent';
import { Multiplication } from './components/Multiplication';

interface IComponentIndex {
    multiplication: Multiplication,
}

const componentIndex: IComponentIndex = {
    multiplication: new Multiplication()
}

export default componentIndex;

export type GrasshopperComponent = "Multiplication" | "Division";