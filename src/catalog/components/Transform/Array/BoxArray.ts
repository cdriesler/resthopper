import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoxArray extends ResthopperComponent {

	public guid: string = "9f6f954c-ba7b-4428-bf1e-1768cdff666c";
	public name: string = "Box Array";
	public category: string = "Transform";
	public subCategory: string = "Array";
	public description: string = "Create a box array of geometry.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}