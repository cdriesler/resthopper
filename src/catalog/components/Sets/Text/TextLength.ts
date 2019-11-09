import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class TextLength extends ResthopperComponent {

	public guid: string = "dca05f6f-e3d9-42e3-b3bb-eb20363fb335";
	public name: string = "Text Length";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Get the length (character count) of some text";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}