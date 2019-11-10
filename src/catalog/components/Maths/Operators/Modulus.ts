import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Modulus extends ResthopperComponent {

	public guid: string = "431bc610-8ae1-4090-b217-1a9d9c519fe2";
	public name: string = "Modulus";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Divides two numbers and returns only the remainder.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}