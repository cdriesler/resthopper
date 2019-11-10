import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Contour extends ResthopperComponent {

	public guid: string = "3b112fb6-3eba-42d2-ba75-0f903c18faab";
	public name: string = "Contour";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Create a set of Brep or Mesh contours";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}