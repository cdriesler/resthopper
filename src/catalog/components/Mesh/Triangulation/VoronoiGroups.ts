import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VoronoiGroups extends ResthopperComponent {

	public guid: string = "9d4854fe-70db-4863-967b-4120d0b6d2e4";
	public name: string = "Voronoi Groups";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Compute a custom set of nested voronoi diagrams.";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

}