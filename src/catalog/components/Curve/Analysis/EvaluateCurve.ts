import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class EvaluateCurve extends ResthopperComponent {

	public guid: string = "fc6979e4-7e91-4508-8e05-37c680779751";
	public name: string = "Evaluate Curve";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate a curve at the specified parameter.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}