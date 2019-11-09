import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class StreamFilter extends ResthopperComponent {

	public guid: string = "eeafc956-268e-461d-8e73-ee05c6f72c01";
	public name: string = "Stream Filter";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Filters a collection of input streams";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}