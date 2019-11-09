import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Rectangle extends ResthopperComponent {

	public guid: string = "d93100b6-d50b-40b2-831a-814659dc38e3";
	public name: string = "Rectangle";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a rectangle on a plane";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}