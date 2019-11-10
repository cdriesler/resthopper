import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Equality extends ResthopperComponent {

	public guid: string = "5db0fb89-4f22-4f09-a777-fa5e55aed7ec";
	public name: string = "Equality";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Test for (in)equality of two numbers";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}