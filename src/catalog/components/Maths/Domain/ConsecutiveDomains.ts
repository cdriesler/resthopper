import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConsecutiveDomains extends ResthopperComponent {

	public guid: string = "95992b33-89e1-4d36-bd35-2754a11af21e";
	public name: string = "Consecutive Domains";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Create consecutive domains from a list of numbers";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}