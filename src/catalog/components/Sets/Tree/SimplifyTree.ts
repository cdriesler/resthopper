import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SimplifyTree extends ResthopperComponent {

	public guid: string = "1303da7b-e339-4e65-a051-82c4dce8224d";
	public name: string = "Simplify Tree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Simplify a data tree by removing the overlap shared amongst all branches.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}