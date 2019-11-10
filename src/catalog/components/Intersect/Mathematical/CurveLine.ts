import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveLine extends ResthopperComponent {

	public guid: string = "0e3173b6-91c6-4845-a748-e45d4fdbc262";
	public name: string = "Curve | Line";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection events for a curve and a line.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}