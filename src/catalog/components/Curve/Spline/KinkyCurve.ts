import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class KinkyCurve extends ResthopperComponent {

	public guid: string = "6f0993e8-5f2f-4fc0-bd73-b84bc240e78e";
	public name: string = "Kinky Curve";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct an interpolated curve through a set of points with a kink angle threshold.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}