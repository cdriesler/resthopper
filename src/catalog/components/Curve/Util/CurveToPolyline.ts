import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CurveToPolyline extends ResthopperComponent {

	public guid: string = "2956d989-3599-476f-bc92-1d847aff98b6";
	public name: string = "Curve To Polyline";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Convert a curve to a polyline.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}