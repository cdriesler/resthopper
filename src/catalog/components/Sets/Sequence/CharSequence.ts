import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CharSequence extends ResthopperComponent {

	public guid: string = "01640871-69ea-40ac-9380-4660d6d28bd2";
	public name: string = "Char Sequence";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Create a sequence of textual characters.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}