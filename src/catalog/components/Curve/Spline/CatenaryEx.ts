import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CatenaryEx extends ResthopperComponent {

	public guid: string = "769f9064-17f5-4c4a-921f-c3a0ee05ba3a";
	public name: string = "Catenary Ex";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a variable catenary chain between two points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}