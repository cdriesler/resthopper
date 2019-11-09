import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SortText extends ResthopperComponent {

	public guid: string = "cec16c67-7b8b-41f7-a5a5-f675177e524b";
	public name: string = "Sort Text";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Sort a collection of text fragments";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}