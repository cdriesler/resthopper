import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CleanTree extends ResthopperComponent {

	public guid: string = "7991bc5f-8a01-4768-bfb0-a39357ac6b84";
	public name: string = "Clean Tree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Removed all null and invalid items from a data tree.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}