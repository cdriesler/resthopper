import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ReverseList extends ResthopperComponent {

	public guid: string = "6ec97ea8-c559-47a2-8d0f-ce80c794d1f4";
	public name: string = "Reverse List";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Reverse the order of a list.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}