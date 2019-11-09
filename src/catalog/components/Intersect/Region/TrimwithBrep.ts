import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class TrimwithBrep extends ResthopperComponent {

	public guid: string = "3eba04bc-00e8-416d-b58f-a3dc8b3e22e2";
	public name: string = "Trim with Brep";
	public category: string = "Intersect";
	public subCategory: string = "Region";
	public description: string = "Trim a curve with a Brep.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}