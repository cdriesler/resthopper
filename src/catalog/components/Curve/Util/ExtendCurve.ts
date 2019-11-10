import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ExtendCurve extends ResthopperComponent {

	public guid: string = "62cc9684-6a39-422e-aefa-ed44643557b9";
	public name: string = "Extend Curve";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Extend a curve by a specified distance.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}