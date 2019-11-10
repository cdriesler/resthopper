import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshShadow extends ResthopperComponent {

	public guid: string = "c3dce3e8-c9cc-413c-a93f-732434282fdd";
	public name: string = "Mesh Shadow";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Compute the shadow outline for a mesh object";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}