import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EndPoints extends ResthopperComponent {

	public guid: string = "11bbd48b-bb0a-4f1b-8167-fa297590390d";
	public name: string = "End Points";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Extract the end points of a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}