import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RegionIntersection extends ResthopperComponent {

	public guid: string = "477c2e7b-c5e5-421e-b8b2-ba60cdf5398b";
	public name: string = "Region Intersection";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Intersection between two sets of planar closed curves (regions)";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}