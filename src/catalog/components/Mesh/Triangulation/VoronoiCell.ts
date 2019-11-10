import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VoronoiCell extends ResthopperComponent {

	public guid: string = "7b181be1-30e7-4a97-915a-1b461741aef8";
	public name: string = "Voronoi Cell";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Compute a single 3D Voronoi cell";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

}