import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MergeOneZero extends ResthopperComponent {

	public guid: string = "22f66ff6-d281-453c-bd8c-36ed24026783";
	public name: string = "Merge 10";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Merge ten streams into one.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}