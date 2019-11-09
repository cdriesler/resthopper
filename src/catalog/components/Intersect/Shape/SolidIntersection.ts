import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SolidIntersection extends ResthopperComponent {

	public guid: string = "5723c845-cafc-442d-a667-8c76532845e6";
	public name: string = "Solid Intersection";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Perform a solid intersection on two Brep sets.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}