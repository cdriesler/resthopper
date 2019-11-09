import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class DelaunayMesh extends ResthopperComponent {

	public guid: string = "1eb4f6ff-3547-4184-bead-1b01e7cfd668";
	public name: string = "Delaunay Mesh";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Delaunay triangulation";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

}