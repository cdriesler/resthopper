import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Cylinder extends ResthopperComponent {

	public guid: string = "0373008a-80ee-45be-887d-ab5a244afc29";
	public name: string = "Cylinder";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a cylindrical surface.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}