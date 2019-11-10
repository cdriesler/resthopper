import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class WeightedAverage extends ResthopperComponent {

	public guid: string = "338666eb-14c5-4d9b-82e2-2b5be60655df";
	public name: string = "Weighted Average";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Solve the arithmetic weighted average for a set of items";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}