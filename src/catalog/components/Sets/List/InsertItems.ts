import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class InsertItems extends ResthopperComponent {

	public guid: string = "e2039b07-d3f3-40f8-af88-d74fed238727";
	public name: string = "Insert Items";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Insert a collection of items into a list.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}