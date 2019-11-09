import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MeshUnion extends ResthopperComponent {

	public guid: string = "88060a82-0bf7-46bb-9af8-bdc860cf7e1d";
	public name: string = "Mesh Union";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Perform a solid union on a set of meshes";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}