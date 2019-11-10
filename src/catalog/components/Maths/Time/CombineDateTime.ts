import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CombineDateTime extends ResthopperComponent {

	public guid: string = "31534405-6573-4be6-8bf8-262e55847a3a";
	public name: string = "Combine Date & Time";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Combine a pure date and a pure time into a single date";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}