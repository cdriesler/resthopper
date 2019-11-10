import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveMiddle extends ResthopperComponent {

	public guid: string = "ccc7b468-e743-4049-891f-299432545898";
	public name: string = "Curve Middle";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Get the point in the middle of a curve";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}