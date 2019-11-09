import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class EvaluateLength extends ResthopperComponent {

	public guid: string = "6b021f56-b194-4210-b9a1-6cef3b7d0848";
	public name: string = "Evaluate Length";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate a curve at a certain factor along its length. Length factors can be supplied both in curve units and normalized units. Change the [N] parameter to toggle between the two modes.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}