import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PowerofOneZero extends ResthopperComponent {

	public guid: string = "2ebb82ef-1f90-4ac9-9a71-1fe0f4ef7044";
	public name: string = "Power of 10";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Raise 10 to the power of N.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}