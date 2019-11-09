import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class TweenCurve extends ResthopperComponent {

	public guid: string = "139619d2-8b18-47b6-b3b9-bf4fec0d6eb1";
	public name: string = "Tween Curve";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Tween between two curves.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}