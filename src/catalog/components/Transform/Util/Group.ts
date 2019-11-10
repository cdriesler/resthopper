import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Group extends ResthopperComponent {

	public guid: string = "874eebe7-835b-4f4f-9811-97e031c41597";
	public name: string = "Group";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Group a set of objects";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}