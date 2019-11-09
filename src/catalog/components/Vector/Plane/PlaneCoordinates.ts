import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PlaneCoordinates extends ResthopperComponent {

	public guid: string = "5f127fa4-ca61-418e-bb2d-e3739d900f1f";
	public name: string = "Plane Coordinates";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Get the coordinates of a point in a plane axis system.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}