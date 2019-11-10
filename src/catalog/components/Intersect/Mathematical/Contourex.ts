import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Contourex extends ResthopperComponent {

	public guid: string = "246cda78-5e88-4087-ba09-ae082bbc4af8";
	public name: string = "Contour (ex)";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Create a set of Brep or Mesh contours";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}