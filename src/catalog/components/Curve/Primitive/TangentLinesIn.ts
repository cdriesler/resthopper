import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class TangentLinesIn extends ResthopperComponent {

	public guid: string = "e0168047-c46a-48c6-8595-2fb3d8574f23";
	public name: string = "Tangent Lines (In)";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create internal tangent lines between circles";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}