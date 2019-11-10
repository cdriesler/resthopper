import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SquareRoot extends ResthopperComponent {

	public guid: string = "ad476cb7-b6d1-41c8-986b-0df243a64146";
	public name: string = "Square Root";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Compute the square root of a value";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}