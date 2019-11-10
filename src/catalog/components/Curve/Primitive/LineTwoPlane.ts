import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LineTwoPlane extends ResthopperComponent {

	public guid: string = "510c4a63-b9bf-42e7-9d07-9d71290264da";
	public name: string = "Line 2Plane";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a line between two planes.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}