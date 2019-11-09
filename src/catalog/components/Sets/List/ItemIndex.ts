import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ItemIndex extends ResthopperComponent {

	public guid: string = "a759fd55-e6be-4673-8365-c28d5b52c6c0";
	public name: string = "Item Index";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Retrieve the index of a certain item in a list.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}