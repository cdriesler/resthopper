import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MatchTree extends ResthopperComponent {

	public guid: string = "46372d0d-82dc-4acb-adc3-25d1fde04c4e";
	public name: string = "Match Tree";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Match one data tree with another.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}