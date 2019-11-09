import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class IsoCurve extends ResthopperComponent {

	public guid: string = "d1d57181-d594-41e8-8efb-041e29f8a5ca";
	public name: string = "Iso Curve";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct {uv} isocurves on a surface.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}