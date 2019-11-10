import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TextTrim extends ResthopperComponent {

	public guid: string = "e4cb7168-5e32-4c54-b425-5a31c6fd685a";
	public name: string = "Text Trim";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Remove whitespace characters from the start and end of some text.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}