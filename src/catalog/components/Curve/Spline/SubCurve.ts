import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubCurve extends ResthopperComponent {

	public guid: string = "429cbba9-55ee-4e84-98ea-876c44db879a";
	public name: string = "Sub Curve";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Construct a curve from the sub-domain of a base curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}