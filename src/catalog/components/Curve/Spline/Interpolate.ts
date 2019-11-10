import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Interpolate extends ResthopperComponent {

	public guid: string = "2b2a4145-3dff-41d4-a8de-1ea9d29eef33";
	public name: string = "Interpolate";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create an interpolated curve through a set of points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}