import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class OffsetCurveLoose extends ResthopperComponent {

	public guid: string = "80e55fc2-933b-4bfb-a353-12358786dba8";
	public name: string = "Offset Curve Loose";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Offset the control-points of a curve with a specified distance.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}