import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CircleThreePt extends ResthopperComponent {

	public guid: string = "47886835-e3ff-4516-a3ed-1b419f055464";
	public name: string = "Circle 3Pt";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a circle defined by three points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}