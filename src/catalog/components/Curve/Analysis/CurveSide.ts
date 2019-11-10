import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurveSide extends ResthopperComponent {

	public guid: string = "bb2e13da-09ca-43fd-bef8-8d71f3653af9";
	public name: string = "Curve Side";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Find on which side of a curve a point exists";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}