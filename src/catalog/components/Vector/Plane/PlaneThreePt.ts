import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PlaneThreePt extends ResthopperComponent {

	public guid: string = "c98a6015-7a2f-423c-bc66-bdc505249b45";
	public name: string = "Plane 3Pt";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Create a plane through three points.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}