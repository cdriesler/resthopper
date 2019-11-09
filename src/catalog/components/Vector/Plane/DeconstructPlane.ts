import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class DeconstructPlane extends ResthopperComponent {

	public guid: string = "3cd2949b-4ea8-4ffb-a70c-5c380f9f46ea";
	public name: string = "Deconstruct Plane";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Deconstruct a plane into its component parts.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}