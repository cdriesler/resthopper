import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveOnSurface extends ResthopperComponent {

	public guid: string = "ffe2dbed-9b5d-4f91-8fe3-10c8961ac2f8";
	public name: string = "Curve On Surface";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create an interpolated curve through a set of points on a surface.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}