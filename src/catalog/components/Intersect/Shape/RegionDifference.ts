import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class RegionDifference extends ResthopperComponent {

	public guid: string = "f72c480b-7ee6-42ef-9821-c371e9203b44";
	public name: string = "Region Difference";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Difference between two sets of planar closed curves (regions)";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}