import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Naturallogarithm extends ResthopperComponent {

	public guid: string = "23afc7aa-2d2f-4ae7-b876-bf366246b826";
	public name: string = "Natural logarithm";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Compute the natural logarithm of a value.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}