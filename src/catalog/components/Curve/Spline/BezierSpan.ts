import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BezierSpan extends ResthopperComponent {

	public guid: string = "30ce59ce-22a1-49ee-9e21-e6d16b3684a8";
	public name: string = "Bezier Span";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct a bezier span from endpoints and tangents.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}