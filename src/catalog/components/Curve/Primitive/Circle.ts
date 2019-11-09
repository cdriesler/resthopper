import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Circle extends ResthopperComponent {

	public guid: string = "807b86e3-be8d-4970-92b5-f8cdcb45b06b";
	public name: string = "Circle";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a circle defined by base plane and radius.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}