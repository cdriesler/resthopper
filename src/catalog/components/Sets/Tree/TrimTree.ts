import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class TrimTree extends ResthopperComponent {

	public guid: string = "1177d6ee-3993-4226-9558-52b7fd63e1e3";
	public name: string = "Trim Tree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Reduce the complexity of a tree by merging the outermost branches.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}