import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshSphereEx extends ResthopperComponent {

	public guid: string = "76f85ee4-5a88-4511-8ba7-30df07e50533";
	public name: string = "Mesh Sphere Ex";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Create a mesh sphere from square patches.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}