import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PowerofE extends ResthopperComponent {

	public guid: string = "c717f26f-e4a0-475c-8e1c-b8f77af1bc99";
	public name: string = "Power of E";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Raise E to the power of N.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}