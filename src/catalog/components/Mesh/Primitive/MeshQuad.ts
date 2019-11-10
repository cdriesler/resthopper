import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshQuad extends ResthopperComponent {

	public guid: string = "1cb59c86-7f6b-4e52-9a0c-6441850e9520";
	public name: string = "Mesh Quad";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Create a mesh quad.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}