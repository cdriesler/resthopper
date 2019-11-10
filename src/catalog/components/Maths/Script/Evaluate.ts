import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Evaluate extends ResthopperComponent {

	public guid: string = "cc2b626f-6eff-4d08-9829-2877560693f4";
	public name: string = "Evaluate";
	public category: string = "Maths";
	public subCategory: string = "Script";
	public description: string = "Evaluate an expression with a flexible number of variables.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}