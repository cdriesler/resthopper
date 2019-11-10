import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SweepOne extends ResthopperComponent {

	public guid: string = "bb6666e7-d0f4-41ec-a257-df2371619f13";
	public name: string = "Sweep1";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a sweep surface with one rail curve.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}