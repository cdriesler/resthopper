import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Square extends ResthopperComponent {

	public guid: string = "2280dde4-9fa2-4b4a-ae2f-37d554861367";
	public name: string = "Square";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Compute the square of a value";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}