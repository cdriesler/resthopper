import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class KeyValueSearch extends ResthopperComponent {

	public guid: string = "1edcc3cf-cf84-41d4-8204-561162cfe510";
	public name: string = "Key/Value Search";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Extract an item from a collection using a key-value match";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}