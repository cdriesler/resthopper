import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SwingArc extends ResthopperComponent {

	public guid: string = "3edc4fbd-24c6-43de-aaa8-5bdf0704373d";
	public name: string = "Swing Arc";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a polycurve consisting of arcs defined by center points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}