import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Ellipse extends ResthopperComponent {

	public guid: string = "46b5564d-d3eb-4bf1-ae16-15ed132cfd88";
	public name: string = "Ellipse";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create an ellipse defined by base plane and two radii.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}