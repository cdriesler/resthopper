import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GraftTree extends ResthopperComponent {

	public guid: string = "87e1d9ef-088b-4d30-9dda-8a7448a17329";
	public name: string = "Graft Tree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Graft a data tree by adding an extra branch for every item.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}