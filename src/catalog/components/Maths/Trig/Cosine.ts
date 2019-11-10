import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Cosine extends ResthopperComponent {

	public guid: string = "d2d2a900-780c-4d58-9a35-1f9d8d35df6f";
	public name: string = "Cosine";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the cosine of a value";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}