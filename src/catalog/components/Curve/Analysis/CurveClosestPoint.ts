import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CurveClosestPoint extends ResthopperComponent {

	public guid: string = "2dc44b22-b1dd-460a-a704-6462d6e91096";
	public name: string = "Curve Closest Point";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Find the closest point on a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}