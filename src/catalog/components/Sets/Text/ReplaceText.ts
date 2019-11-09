import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ReplaceText extends ResthopperComponent {

	public guid: string = "4df8df00-3635-45bd-95e6-f9206296c110";
	public name: string = "Replace Text";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Replace all occurences of a specific text fragment with another";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}