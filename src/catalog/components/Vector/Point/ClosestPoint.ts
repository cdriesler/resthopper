import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ClosestPoint extends ResthopperComponent {

	public guid: string = "571ca323-6e55-425a-bf9e-ee103c7ba4b9";
	public name: string = "Closest Point";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Find closest point in a point collection.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}