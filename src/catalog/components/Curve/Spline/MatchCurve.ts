import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MatchCurve extends ResthopperComponent {

	public guid: string = "282bf4eb-668a-4a2c-81af-2432ac863ddd";
	public name: string = "Match Curve";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Match two curves.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}