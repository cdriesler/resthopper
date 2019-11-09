import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SimplifyCurve extends ResthopperComponent {

	public guid: string = "922dc7e5-0f0e-4c21-ae4b-f6a8654e63f6";
	public name: string = "Simplify Curve";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Simplify a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}