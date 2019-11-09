import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ShortestList extends ResthopperComponent {

	public guid: string = "5a13ec19-e4e9-43da-bf65-f93025fa87ca";
	public name: string = "Shortest List";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Shrink a collection of lists to the shortest length amongst them";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}