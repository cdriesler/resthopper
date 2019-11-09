import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BoundsTwoD extends ResthopperComponent {

	public guid: string = "dd53b24c-003a-4a04-b185-a44d91633cbe";
	public name: string = "Bounds 2D";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Create a numeric two-dimensional domain which encompasses a list of coordinates.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}