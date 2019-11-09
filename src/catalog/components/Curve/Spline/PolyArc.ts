import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PolyArc extends ResthopperComponent {

	public guid: string = "7159ef59-e4ef-44b8-8cb2-91231e278292";
	public name: string = "PolyArc";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a polycurve consisting of arc and line segments.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}