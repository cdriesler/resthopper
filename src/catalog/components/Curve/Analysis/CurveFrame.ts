import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveFrame extends ResthopperComponent {

	public guid: string = "6b2a5853-07aa-4329-ba84-0a5d46b51dbd";
	public name: string = "Curve Frame";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Get the curvature frame of a curve at a specified parameter.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}