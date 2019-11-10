import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Cube extends ResthopperComponent {

	public guid: string = "7e3185eb-a38c-4949-bcf2-0e80dee3a344";
	public name: string = "Cube";
	public category: string = "Maths";
	public subCategory: string = "Polynomials";
	public description: string = "Compute the cube of a value";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}