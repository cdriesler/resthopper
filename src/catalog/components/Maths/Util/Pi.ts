import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Pi extends ResthopperComponent {

	public guid: string = "0d2ccfb3-9d41-4759-9452-da6a522c3eaa";
	public name: string = "Pi";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Returns a factor of Pi.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}