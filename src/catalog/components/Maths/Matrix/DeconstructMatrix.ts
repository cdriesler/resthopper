import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class DeconstructMatrix extends ResthopperComponent {

	public guid: string = "3aa2a080-e322-4be3-8c6e-baf6c8000cf1";
	public name: string = "Deconstruct Matrix";
	public category: string = "Maths";
	public subCategory: string = "Matrix";
	public description: string = "Deconstruct a matrix into its component parts";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}