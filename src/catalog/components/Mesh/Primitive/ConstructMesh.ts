import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructMesh extends ResthopperComponent {

	public guid: string = "e2c0f9db-a862-4bd9-810c-ef2610e7a56f";
	public name: string = "Construct Mesh";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Construct a mesh from vertices, faces and optional colours.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}