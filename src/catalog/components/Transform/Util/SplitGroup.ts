import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SplitGroup extends ResthopperComponent {

	public guid: string = "fd03419e-e1cc-4603-8a57-6dfa56ed5dec";
	public name: string = "Split Group";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Split a group";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}