import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class FindDomain extends ResthopperComponent {

	public guid: string = "0b5c7fad-0473-41aa-bf52-d7a861dcaa29";
	public name: string = "Find Domain";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Find the first domain that contains a specific value";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}