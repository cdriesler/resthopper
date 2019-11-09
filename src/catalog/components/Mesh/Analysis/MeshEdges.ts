import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MeshEdges extends ResthopperComponent {

	public guid: string = "2b9bf01d-5fe5-464c-b0b3-b469eb5f2efb";
	public name: string = "Mesh Edges";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Get all the edges of a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}