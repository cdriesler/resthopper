import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PlaneClosestPoint extends ResthopperComponent {

	public guid: string = "b075c065-efda-4c9f-9cc9-288362b1b4b9";
	public name: string = "Plane Closest Point";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Find the closest point on a plane.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}