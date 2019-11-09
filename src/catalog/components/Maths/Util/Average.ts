import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Average extends ResthopperComponent {

	public guid: string = "7986486c-621a-48fb-8f27-a28a22c91cc9";
	public name: string = "Average";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Solve the arithmetic average for a set of items";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}