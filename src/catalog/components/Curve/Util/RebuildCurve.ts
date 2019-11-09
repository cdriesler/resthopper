import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class RebuildCurve extends ResthopperComponent {

	public guid: string = "9333c5b3-11f9-423c-bbb5-7e5156430219";
	public name: string = "Rebuild Curve";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Rebuild a curve with a specific number of control-points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}