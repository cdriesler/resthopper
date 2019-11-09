import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class DeconstructArc extends ResthopperComponent {

	public guid: string = "23862862-049a-40be-b558-2418aacbd916";
	public name: string = "Deconstruct Arc";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Retrieve the base plane, radius and angle domain of an arc.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}