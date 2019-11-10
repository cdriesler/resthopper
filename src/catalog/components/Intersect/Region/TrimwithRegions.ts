import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TrimwithRegions extends ResthopperComponent {

	public guid: string = "26949c81-9b50-43b7-ac49-3203deb6eec7";
	public name: string = "Trim with Regions";
	public category: string = "Intersect";
	public subCategory: string = "Region";
	public description: string = "Trim a curve with multiple regions.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}