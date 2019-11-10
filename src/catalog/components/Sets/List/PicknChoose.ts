import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PicknChoose extends ResthopperComponent {

	public guid: string = "03b801eb-87cd-476a-a591-257fe5d5bf0f";
	public name: string = "Pick'n'Choose";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Pick and choose from a set of input data.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}