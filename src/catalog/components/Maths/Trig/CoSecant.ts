import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CoSecant extends ResthopperComponent {

	public guid: string = "d222500b-dfd5-45e0-933e-eabefd07cbfa";
	public name: string = "CoSecant";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the co-secant (reciprocal of the Sine) of an angle.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}