import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class FitLine extends ResthopperComponent {

	public guid: string = "1f798a28-9de6-47b5-8201-cac57256b777";
	public name: string = "Fit Line";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Fit a line to a collection of points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}