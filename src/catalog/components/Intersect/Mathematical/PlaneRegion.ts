import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PlaneRegion extends ResthopperComponent {

	public guid: string = "80e3614a-25ae-43e7-bb0a-760e68ade864";
	public name: string = "Plane Region";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Create a bounded region from intersecting planes.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}