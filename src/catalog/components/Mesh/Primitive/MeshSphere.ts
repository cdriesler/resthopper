import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MeshSphere extends ResthopperComponent {

	public guid: string = "0a391eac-5048-443c-9c1b-f592299b6dd6";
	public name: string = "Mesh Sphere";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Create a mesh sphere.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}