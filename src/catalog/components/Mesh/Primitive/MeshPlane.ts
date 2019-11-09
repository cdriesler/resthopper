import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MeshPlane extends ResthopperComponent {

	public guid: string = "8adbf481-7589-4a40-b490-006531ea001d";
	public name: string = "Mesh Plane";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Create a mesh plane.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}