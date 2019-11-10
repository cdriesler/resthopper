import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PullCurve extends ResthopperComponent {

	public guid: string = "6b5812f5-bb36-4d74-97fc-5a1f2f77452d";
	public name: string = "Pull Curve";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Pull a curve onto a surface.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}