import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Voronoi extends ResthopperComponent {

	public guid: string = "a4011be0-1c91-45bd-8280-17dd3a9f46f1";
	public name: string = "Voronoi";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Planar voronoi diagram for a collection of points";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

}