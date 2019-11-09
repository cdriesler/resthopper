import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PruneTree extends ResthopperComponent {

	public guid: string = "fe769f85-8900-45dd-ba11-ec9cd6c778c6";
	public name: string = "Prune Tree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Remove small branches from a Data Tree.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}