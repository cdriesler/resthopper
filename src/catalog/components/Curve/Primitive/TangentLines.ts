import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class TangentLines extends ResthopperComponent {

	public guid: string = "ea0f0996-af7a-481d-8099-09c041e6c2d5";
	public name: string = "Tangent Lines";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create tangent lines between a point and a circle";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}