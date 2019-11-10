import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OffsetSurfaceLoose extends ResthopperComponent {

	public guid: string = "e7e43403-f913-4d83-8aff-5b1c7a7f9fbc";
	public name: string = "Offset Surface Loose";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Offset a surface by moving the control points.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}