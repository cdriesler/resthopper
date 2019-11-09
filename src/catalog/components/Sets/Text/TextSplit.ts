import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class TextSplit extends ResthopperComponent {

	public guid: string = "04887d01-504c-480e-b2a2-01ea19cc5922";
	public name: string = "Text Split";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Split some text into fragments using separators";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}