import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PolygonEdge extends ResthopperComponent {

	public guid: string = "f4568ce6-aade-4511-8f32-f27d8a6bf9e9";
	public name: string = "Polygon Edge";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a polygon from a single edge.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}