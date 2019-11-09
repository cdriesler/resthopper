import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class FitCurve extends ResthopperComponent {

	public guid: string = "a3f9f19e-3e6c-4ac7-97c3-946de32c3e8e";
	public name: string = "Fit Curve";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Fit a curve along another curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}