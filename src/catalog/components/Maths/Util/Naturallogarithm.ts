import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Naturallogarithm extends ResthopperComponent {

	public guid: string = "b6cac37c-21b9-46c6-bd0d-17ff67796578";
	public name: string = "Natural logarithm";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Returns a factor of the natural number (e).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}