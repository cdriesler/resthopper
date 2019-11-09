import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Logarithm extends ResthopperComponent {

	public guid: string = "27d6f724-a701-4585-992f-3897488abf08";
	public name: string = "Logarithm";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Compute the Base-10 logarithm of a value.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}