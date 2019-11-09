import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class TriangleMapping extends ResthopperComponent {

	public guid: string = "61d81100-c4d3-462d-8b51-d951c0ae32db";
	public name: string = "Triangle Mapping";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Transform geometry from one triangle into another.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}