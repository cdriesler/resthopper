import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CurvePlane extends ResthopperComponent {

	public guid: string = "b7c12ed1-b09a-4e15-996f-3fa9f3f16b1c";
	public name: string = "Curve | Plane";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection events for a curve and a plane.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}