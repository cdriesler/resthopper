import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointInCurve extends ResthopperComponent {

	public guid: string = "a72b0bd3-c7a7-458e-875d-09ae1624638c";
	public name: string = "Point In Curve";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Test a point for closed curve containment.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}