import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class VoronoiThreeD extends ResthopperComponent {

	public guid: string = "ba9bb57a-61cf-4207-a1c4-994e371ba4f9";
	public name: string = "Voronoi 3D";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Volumetric voronoi diagram for a collection of points";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

}