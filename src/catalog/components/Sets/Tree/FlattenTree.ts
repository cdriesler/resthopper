import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FlattenTree extends ResthopperComponent {

	public guid: string = "f80cfe18-9510-4b89-8301-8e58faf423bb";
	public name: string = "Flatten Tree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Flatten a data tree by removing all branching information.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}