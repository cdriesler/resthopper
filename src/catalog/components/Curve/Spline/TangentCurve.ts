import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class TangentCurve extends ResthopperComponent {

	public guid: string = "f73498c5-178b-4e09-ad61-73d172fa6e56";
	public name: string = "Tangent Curve";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a curve through a set of points with tangents.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}