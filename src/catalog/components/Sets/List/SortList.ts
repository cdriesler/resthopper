import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SortList extends ResthopperComponent {

	public guid: string = "6f93d366-919f-4dda-a35e-ba03dd62799b";
	public name: string = "Sort List";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Sort a list of numeric keys.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}