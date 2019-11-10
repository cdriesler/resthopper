import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Revolution extends ResthopperComponent {

	public guid: string = "cdee962f-4202-456b-a1b4-f3ed9aa0dc29";
	public name: string = "Revolution";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a surface of revolution.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}