import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class OneOverX extends ResthopperComponent {

	public guid: string = "797d922f-3a1d-46fe-9155-358b009b5997";
	public name: string = "One Over X";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Compute one over x.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}