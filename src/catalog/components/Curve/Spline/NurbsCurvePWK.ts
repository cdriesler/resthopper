import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class NurbsCurvePWK extends ResthopperComponent {

	public guid: string = "1f8e1ff7-8278-4421-b39d-350e71d85d37";
	public name: string = "Nurbs Curve PWK";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct a nurbs curve from control points, weights and knots.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}