import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class UnflattenTree extends ResthopperComponent {

	public guid: string = "b8e2aa8f-8830-4ee1-bb59-613ea279c281";
	public name: string = "Unflatten Tree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Unflatten a data tree by moving items back into branches.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}