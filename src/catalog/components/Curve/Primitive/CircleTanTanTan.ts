import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CircleTanTanTan extends ResthopperComponent {

	public guid: string = "dcaa922d-5491-4826-9a22-5adefa139f43";
	public name: string = "Circle TanTanTan";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a circle tangent to three curves.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}