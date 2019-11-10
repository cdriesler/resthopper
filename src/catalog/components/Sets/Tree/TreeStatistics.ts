import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TreeStatistics extends ResthopperComponent {

	public guid: string = "99bee19d-588c-41a0-b9b9-1d00fb03ea1a";
	public name: string = "Tree Statistics";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Get some statistics regarding a data tree.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}