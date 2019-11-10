import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConvexHull extends ResthopperComponent {

	public guid: string = "9d0c5284-ea24-4f9f-a183-ef57fc48b5b8";
	public name: string = "Convex Hull";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Compute the planar, convex hull for a collection of points";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

}