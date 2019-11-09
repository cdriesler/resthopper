import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ReplacePaths extends ResthopperComponent {

	public guid: string = "bfaaf799-77dc-4f31-9ad8-2f7d1a80aeb0";
	public name: string = "Replace Paths";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Find & replace paths in a data tree";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}