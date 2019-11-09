import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MeshIntersection extends ResthopperComponent {

	public guid: string = "95aef4f6-66fc-477e-b8f8-32395a837831";
	public name: string = "Mesh Intersection";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Perform a solid intersection on a set of meshes";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}