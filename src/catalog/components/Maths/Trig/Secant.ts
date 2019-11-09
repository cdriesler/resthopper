import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Secant extends ResthopperComponent {

	public guid: string = "60103def-1bb7-4700-b294-3a89100525c4";
	public name: string = "Secant";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the secant (reciprocal of the Cosine) of an angle.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}