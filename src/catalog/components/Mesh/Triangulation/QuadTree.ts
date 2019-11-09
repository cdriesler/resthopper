import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class QuadTree extends ResthopperComponent {

	public guid: string = "8102032b-9699-4949-ab12-3017a31d1062";
	public name: string = "QuadTree";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "A two-dimensional quadtree structure";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

}