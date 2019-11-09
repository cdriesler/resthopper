import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BrepPlane extends ResthopperComponent {

	public guid: string = "4fe828e8-fa95-4cc5-9a8c-c33856ecc783";
	public name: string = "Brep | Plane";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection events for a Brep and a plane (otherwise known as section).";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}