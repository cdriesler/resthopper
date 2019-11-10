import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ProximityTwoD extends ResthopperComponent {

	public guid: string = "458ed0e0-19a3-419b-8ead-f524925b8a35";
	public name: string = "Proximity 2D";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Search for two-dimensional proximity within a point list";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

}