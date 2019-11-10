import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveNearestObject extends ResthopperComponent {

	public guid: string = "748f214a-bc64-4556-9da5-4fa59a30c5c7";
	public name: string = "Curve Nearest Object";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Find the object nearest to a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}