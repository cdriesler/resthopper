import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PowerofTwo extends ResthopperComponent {

	public guid: string = "7a1e5fd7-b7da-4244-a261-f1da66614992";
	public name: string = "Power of 2";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Raise 2 to the power of N.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}