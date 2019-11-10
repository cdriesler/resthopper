import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Tangent extends ResthopperComponent {

	public guid: string = "0f31784f-7177-4104-8500-1f4f4a306df4";
	public name: string = "Tangent";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the tangent of a value";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}