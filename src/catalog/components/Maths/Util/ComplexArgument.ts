import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ComplexArgument extends ResthopperComponent {

	public guid: string = "be715e4c-d6d8-447b-a9c3-6fea700d0b83";
	public name: string = "Complex Argument";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Get the argument of a Complex number";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}