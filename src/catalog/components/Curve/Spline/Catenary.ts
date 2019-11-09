import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Catenary extends ResthopperComponent {

	public guid: string = "275671d4-3e87-40bd-8aff-8e6a5fdbb892";
	public name: string = "Catenary";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a catenary chain between two points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}