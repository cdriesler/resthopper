import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PlaneOffset extends ResthopperComponent {

	public guid: string = "3a0c7bda-3d22-4588-8bab-03f57a52a6ea";
	public name: string = "Plane Offset";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Offset a plane.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}