import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class YZPlane extends ResthopperComponent {

	public guid: string = "fad344bc-09b1-4855-a2e6-437ef5715fe3";
	public name: string = "YZ Plane";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "World YZ plane.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}