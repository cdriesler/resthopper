import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CurveProximity extends ResthopperComponent {

	public guid: string = "6b7ba278-5c9d-42f1-a61d-6209cbd44907";
	public name: string = "Curve Proximity";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Find the pair of closest points between two curves.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}