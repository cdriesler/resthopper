import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Truncate extends ResthopperComponent {

	public guid: string = "bd96f893-d57b-4f04-90d0-dca0d72ff2f9";
	public name: string = "Truncate";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Perform truncation of numerical extremes";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}