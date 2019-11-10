import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TreeItem extends ResthopperComponent {

	public guid: string = "c1ec65a3-bda4-4fad-87d0-edf86ed9d81c";
	public name: string = "Tree Item";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Retrieve a specific item from a data tree.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}