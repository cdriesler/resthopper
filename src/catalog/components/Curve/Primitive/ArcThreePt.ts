import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ArcThreePt extends ResthopperComponent {

	public guid: string = "9fa1b081-b1c7-4a12-a163-0aa8da9ff6c4";
	public name: string = "Arc 3Pt";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create an arc through three points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}