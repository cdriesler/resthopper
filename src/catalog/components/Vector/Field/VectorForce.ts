import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VectorForce extends ResthopperComponent {

	public guid: string = "d27cc1ea-9ef7-47bf-8ee2-c6662da0e3d9";
	public name: string = "Vector Force";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Create a field due to a vector force";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

}