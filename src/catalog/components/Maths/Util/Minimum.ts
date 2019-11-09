import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Minimum extends ResthopperComponent {

	public guid: string = "57308b30-772d-4919-ac67-e86c18f3a996";
	public name: string = "Minimum";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Return the lesser of two items.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}