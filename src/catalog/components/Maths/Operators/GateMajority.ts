import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GateMajority extends ResthopperComponent {

	public guid: string = "78669f9c-4fea-44fd-ab12-2a69eeec58de";
	public name: string = "Gate Majority";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Calculates the majority vote among three booleans.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}