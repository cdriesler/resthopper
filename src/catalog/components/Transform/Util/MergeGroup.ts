import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeGroup extends ResthopperComponent {

	public guid: string = "15204c6d-bba8-403d-9e8f-6660ab8e0df5";
	public name: string = "Merge Group";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Merge two groups";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}