import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Reduce extends ResthopperComponent {

	public guid: string = "884646c3-0e70-4ad1-90c5-42601ee26450";
	public name: string = "Reduce";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Reduce a polyline by removing least significant vertices.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}