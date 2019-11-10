import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LinePlane extends ResthopperComponent {

	public guid: string = "75d0442c-1aa3-47cf-bd94-457b42c16e9f";
	public name: string = "Line | Plane";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection event for a line and a plane.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}