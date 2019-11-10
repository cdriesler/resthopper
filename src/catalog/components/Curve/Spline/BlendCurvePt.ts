import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BlendCurvePt extends ResthopperComponent {

	public guid: string = "14cf43b6-5eb9-460f-899c-bdece732213a";
	public name: string = "Blend Curve Pt";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a blend curve between two curves that intersects a point.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}