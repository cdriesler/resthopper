import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MeshTriangle extends ResthopperComponent {

	public guid: string = "5a4ddedd-5af9-49e5-bace-12910a8b9366";
	public name: string = "Mesh Triangle";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Create a mesh triangle.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}