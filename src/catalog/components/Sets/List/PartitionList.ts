import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PartitionList extends ResthopperComponent {

	public guid: string = "5a93246d-2595-4c28-bc2d-90657634f92a";
	public name: string = "Partition List";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Partition a list into sub-lists";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}