import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Dispatch extends ResthopperComponent {

	public guid: string = "d8332545-21b2-4716-96e3-8559a9876e17";
	public name: string = "Dispatch";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Dispatch the items in a list into two target lists.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}