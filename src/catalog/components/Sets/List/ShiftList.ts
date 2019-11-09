import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ShiftList extends ResthopperComponent {

	public guid: string = "4fdfe351-6c07-47ce-9fb9-be027fb62186";
	public name: string = "Shift List";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Offset all items in a list.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}