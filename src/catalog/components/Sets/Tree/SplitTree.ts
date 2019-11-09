import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SplitTree extends ResthopperComponent {

	public guid: string = "d8b1e7ac-cd31-4748-b262-e07e53068afc";
	public name: string = "Split Tree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Split a data tree into two parts using path masks.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}