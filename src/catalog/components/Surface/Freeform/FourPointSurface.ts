import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FourPointSurface extends ResthopperComponent {

	public guid: string = "c77a8b3b-c569-4d81-9b59-1c27299a1c45";
	public name: string = "4Point Surface";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a surface connecting three or four corner points.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}