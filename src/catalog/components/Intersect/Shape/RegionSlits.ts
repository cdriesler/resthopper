import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class RegionSlits extends ResthopperComponent {

	public guid: string = "0feeeaca-8f1f-4d7c-a24a-8e7dd68604a2";
	public name: string = "Region Slits";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Add slits to a collection of intersecting planar regions";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}