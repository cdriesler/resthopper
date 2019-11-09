import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Polygon extends ResthopperComponent {

	public guid: string = "845527a6-5cea-4ae9-a667-96ae1667a4e8";
	public name: string = "Polygon";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a polygon with optional round edges.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}