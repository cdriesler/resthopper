import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointstoNumbers extends ResthopperComponent {

	public guid: string = "d24169cc-9922-4923-92bc-b9222efc413f";
	public name: string = "Points to Numbers";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Convert a list of points to a list of numbers";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}