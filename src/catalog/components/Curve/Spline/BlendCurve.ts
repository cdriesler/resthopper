import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BlendCurve extends ResthopperComponent {

	public guid: string = "5909dbcb-4950-4ce4-9433-7cf9e62ee011";
	public name: string = "Blend Curve";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create a blend curve between two curves.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}