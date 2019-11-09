import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SurfaceClosestPoint extends ResthopperComponent {

	public guid: string = "4a9e9a8e-0943-4438-b360-129c30f2bb0f";
	public name: string = "Surface Closest Point";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Find the closest point on a surface.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}