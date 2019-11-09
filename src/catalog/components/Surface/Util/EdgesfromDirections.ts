import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class EdgesfromDirections extends ResthopperComponent {

	public guid: string = "64ff9813-8fe8-4708-ac9f-61b825213e83";
	public name: string = "Edges from Directions";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Select brep edges based on edge direction";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}