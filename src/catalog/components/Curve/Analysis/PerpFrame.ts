import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PerpFrame extends ResthopperComponent {

	public guid: string = "69f3e5ee-4770-44b3-8851-ae10ae555398";
	public name: string = "Perp Frame";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Solve the perpendicular (zero-twisting) frame at a specified curve parameter.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}