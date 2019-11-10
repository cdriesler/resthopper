import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CreateSet extends ResthopperComponent {

	public guid: string = "98c3c63a-e78a-43ea-a111-514fcf312c95";
	public name: string = "Create Set";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Creates the valid set from a list of items (a valid set only contains distinct elements).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}