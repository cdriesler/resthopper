import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Power extends ResthopperComponent {

	public guid: string = "78fed580-851b-46fe-af2f-6519a9d378e0";
	public name: string = "Power";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Raise a value to a power.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}