import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ReplaceItems extends ResthopperComponent {

	public guid: string = "7a218bfb-b93d-4c1f-83d3-5a0b909dd60b";
	public name: string = "Replace Items";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Replace certain items in a list.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}