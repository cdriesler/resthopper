import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RegionUnion extends ResthopperComponent {

	public guid: string = "1222394f-0d33-4f31-9101-7281bde89fe5";
	public name: string = "Region Union";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Union of a set of planar closed curves (regions)";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}