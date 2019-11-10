import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveDepth extends ResthopperComponent {

	public guid: string = "a583f722-240a-4fc9-aa1d-021720a4516a";
	public name: string = "Curve Depth";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Measure the depth of a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}