import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ClosestPoints extends ResthopperComponent {

	public guid: string = "446014c4-c11c-45a7-8839-c45dc60950d6";
	public name: string = "Closest Points";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Find closest points in a point collection.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}