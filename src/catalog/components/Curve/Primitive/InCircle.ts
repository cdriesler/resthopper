import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class InCircle extends ResthopperComponent {

	public guid: string = "28b1c4d4-ab1c-4309-accd-1b7a954ed948";
	public name: string = "InCircle";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create the incircle of a triangle.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}