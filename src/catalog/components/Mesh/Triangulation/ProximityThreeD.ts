import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ProximityThreeD extends ResthopperComponent {

	public guid: string = "e504d619-4467-437a-92fa-c6822d16b066";
	public name: string = "Proximity 3D";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Search for three-dimensional proximity within a point list";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

}