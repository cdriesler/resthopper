import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Split extends ResthopperComponent {

	public guid: string = "915f8f93-f5d1-4a7b-aecb-c327bab88ffb";
	public name: string = "Split";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Split a compound transformation into fragments.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}