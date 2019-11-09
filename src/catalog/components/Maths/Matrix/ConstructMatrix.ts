import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ConstructMatrix extends ResthopperComponent {

	public guid: string = "54ac80cf-74f3-43f7-834c-0e3fe94632c6";
	public name: string = "Construct Matrix";
	public category: string = "Maths";
	public subCategory: string = "Matrix";
	public description: string = "Construct a matrix from initial values";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}