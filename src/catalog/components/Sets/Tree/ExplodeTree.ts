import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ExplodeTree extends ResthopperComponent {

	public guid: string = "74cad441-2264-45fe-a57d-85034751208a";
	public name: string = "Explode Tree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Extract all the branches from a tree";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}