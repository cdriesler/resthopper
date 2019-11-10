import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BiArc extends ResthopperComponent {

	public guid: string = "75f4b0fd-9721-47b1-99e7-9c098b342e67";
	public name: string = "BiArc";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a bi-arc based on endpoints and tangents.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}