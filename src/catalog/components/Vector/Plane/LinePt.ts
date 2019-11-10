import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LinePt extends ResthopperComponent {

	public guid: string = "ccc3f2ff-c9f6-45f8-aa30-8a924a9bda36";
	public name: string = "Line + Pt";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Create a plane from a line and a point.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}