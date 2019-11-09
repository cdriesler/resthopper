import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Ungroup extends ResthopperComponent {

	public guid: string = "a45f59c8-11c1-4ea7-9e10-847061b80d75";
	public name: string = "Ungroup";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Ungroup a set of objects";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}