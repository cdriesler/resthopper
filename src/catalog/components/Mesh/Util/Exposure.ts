import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Exposure extends ResthopperComponent {

	public guid: string = "a78e3fbc-d199-4bd9-8df0-fc4c2743eb31";
	public name: string = "Exposure";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Solve mesh exposure for a collection of energy rays and obstructions.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}