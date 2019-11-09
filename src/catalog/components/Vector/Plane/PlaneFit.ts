import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PlaneFit extends ResthopperComponent {

	public guid: string = "33bfc73c-19b2-480b-81e6-f3523a012ea6";
	public name: string = "Plane Fit";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Fit a plane through a set of points.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}