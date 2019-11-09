import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ListItem extends ResthopperComponent {

	public guid: string = "59daf374-bc21-4a5e-8282-5504fb7ae9ae";
	public name: string = "List Item";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Retrieve a specific item from a list.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}