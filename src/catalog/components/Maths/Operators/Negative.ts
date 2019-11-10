import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Negative extends ResthopperComponent {

	public guid: string = "a3371040-e552-4bc8-b0ff-10a840258e88";
	public name: string = "Negative";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Compute the negative of a value.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}