import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class FitLoft extends ResthopperComponent {

	public guid: string = "342aa574-1327-4bc2-8daf-203da2a45676";
	public name: string = "Fit Loft";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a loft fitted through a set of curves.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}