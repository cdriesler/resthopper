import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class TrimwithRegion extends ResthopperComponent {

	public guid: string = "3092caf0-7cf9-4885-bcc0-e635d878832a";
	public name: string = "Trim with Region";
	public category: string = "Intersect";
	public subCategory: string = "Region";
	public description: string = "Trim a curve with a region.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}