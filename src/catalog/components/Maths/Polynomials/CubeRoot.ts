import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CubeRoot extends ResthopperComponent {

	public guid: string = "5b0be57a-31f5-4446-a11a-ae0d348bca90";
	public name: string = "Cube Root";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Compute the cube root of a value";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}