import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class LogN extends ResthopperComponent {

	public guid: string = "7ab8d289-26a2-4dd4-b4ad-df5b477999d8";
	public name: string = "Log N";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Return the N-base logarithm of a number.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}