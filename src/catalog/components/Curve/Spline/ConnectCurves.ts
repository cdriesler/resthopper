import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConnectCurves extends ResthopperComponent {

	public guid: string = "d0a1b843-873d-4d1d-965c-b5423b35f327";
	public name: string = "Connect Curves";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Connect a sequence of curves.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}