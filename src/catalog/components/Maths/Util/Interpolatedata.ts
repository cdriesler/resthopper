import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Interpolatedata extends ResthopperComponent {

	public guid: string = "e168ff6b-e5c0-48f1-b831-f6996bf3b459";
	public name: string = "Interpolate data";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Interpolate a collection of data.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}