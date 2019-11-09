import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class LoftOptions extends ResthopperComponent {

	public guid: string = "45f19d16-1c9f-4b0f-a9a6-45a77f3d206c";
	public name: string = "Loft Options";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create loft options from atomic inputs";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}