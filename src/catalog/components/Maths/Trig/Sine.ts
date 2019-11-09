import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Sine extends ResthopperComponent {

	public guid: string = "7663efbb-d9b8-4c6a-a0da-c3750a7bbe77";
	public name: string = "Sine";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the sine of a value";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}