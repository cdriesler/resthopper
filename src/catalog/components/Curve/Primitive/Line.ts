import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Line extends ResthopperComponent {

	public guid: string = "4c4e56eb-2f04-43f9-95a3-cc46a14f495a";
	public name: string = "Line";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a line between two points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}