import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class RectangleTwoPt extends ResthopperComponent {

	public guid: string = "575660b1-8c79-4b8d-9222-7ab4a6ddb359";
	public name: string = "Rectangle 2Pt";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a rectangle from a base plane and two points";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}