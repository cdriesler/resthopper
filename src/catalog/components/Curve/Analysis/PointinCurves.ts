import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PointinCurves extends ResthopperComponent {

	public guid: string = "0b04e8b9-00d7-47a7-95c3-0d51e654fe88";
	public name: string = "Point in Curves";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Test a point for multiple closed curve containment.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}