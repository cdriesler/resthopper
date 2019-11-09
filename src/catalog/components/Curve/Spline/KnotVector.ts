import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class KnotVector extends ResthopperComponent {

	public guid: string = "846470bd-4918-4d00-9388-7e022b2cba73";
	public name: string = "Knot Vector";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct a nurbs curve knot vector.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}