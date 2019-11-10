import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubList extends ResthopperComponent {

	public guid: string = "b333ff42-93bd-406b-8e17-15780719b6ec";
	public name: string = "Sub List";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Extract a subset from a list.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}