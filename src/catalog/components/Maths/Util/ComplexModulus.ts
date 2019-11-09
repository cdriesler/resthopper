import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ComplexModulus extends ResthopperComponent {

	public guid: string = "88fb33f9-f467-452b-a0e3-44bdb78a9b06";
	public name: string = "Complex Modulus";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Get the modulus of a Complex number";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}