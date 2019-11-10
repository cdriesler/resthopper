import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RectangleThreePt extends ResthopperComponent {

	public guid: string = "9bc98a1d-2ecc-407e-948a-09a09ed3e69d";
	public name: string = "Rectangle 3Pt";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a rectangle from three points";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}