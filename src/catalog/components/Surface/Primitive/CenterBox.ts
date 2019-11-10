import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CenterBox extends ResthopperComponent {

	public guid: string = "28061aae-04fb-4cb5-ac45-16f3b66bc0a4";
	public name: string = "Center Box";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a box centered on a plane.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}