import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DelaunayEdges extends ResthopperComponent {

	public guid: string = "db2a4d25-23fa-4887-8983-ee5293cc82c0";
	public name: string = "Delaunay Edges";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Delaunay connectivity";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

}