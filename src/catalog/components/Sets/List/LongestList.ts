import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class LongestList extends ResthopperComponent {

	public guid: string = "8440fd1b-b6e0-4bdb-aa93-4ec295c213e9";
	public name: string = "Longest List";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Grow a collection of lists to the longest length amongst them";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}