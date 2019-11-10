import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TreeBranch extends ResthopperComponent {

	public guid: string = "3a710c1e-1809-4e19-8c15-82adce31cd62";
	public name: string = "Tree Branch";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Retrieve a specific branch from a data tree.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}