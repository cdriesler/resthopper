import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Interpolatet extends ResthopperComponent {

	public guid: string = "75eb156d-d023-42f9-a85e-2f2456b8bcce";
	public name: string = "Interpolate (t)";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create an interpolated curve through a set of points with tangents.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}