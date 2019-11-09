import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SmallerThan extends ResthopperComponent {

	public guid: string = "ae840986-cade-4e5a-96b0-570f007d4fc0";
	public name: string = "Smaller Than";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Smaller than (or equal to)";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}