import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class NurbsCurve extends ResthopperComponent {

	public guid: string = "dde71aef-d6ed-40a6-af98-6b0673983c82";
	public name: string = "Nurbs Curve";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct a nurbs curve from control points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}