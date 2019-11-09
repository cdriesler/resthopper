import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PlaneThroughShape extends ResthopperComponent {

	public guid: string = "d8698126-0e91-4ae7-ba05-2490258573ea";
	public name: string = "Plane Through Shape";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Make a rectangular surface that is larger than a given shape.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}