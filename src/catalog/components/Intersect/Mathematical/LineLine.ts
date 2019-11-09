import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class LineLine extends ResthopperComponent {

	public guid: string = "6d4b82a7-8c1d-4bec-af7b-ca321ba4beb1";
	public name: string = "Line | Line";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection events for two lines.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}