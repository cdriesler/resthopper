import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PolyLine extends ResthopperComponent {

	public guid: string = "71b5b089-500a-4ea6-81c5-2f960441a0e8";
	public name: string = "PolyLine";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a polyline connecting a number of points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}