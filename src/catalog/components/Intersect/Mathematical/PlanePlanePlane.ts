import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PlanePlanePlane extends ResthopperComponent {

	public guid: string = "f1ea5a4b-1a4f-4cf4-ad94-1ecfb9302b6e";
	public name: string = "Plane | Plane | Plane";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve the intersection events of three planes.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}