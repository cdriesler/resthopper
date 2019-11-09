import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ControlPoints extends ResthopperComponent {

	public guid: string = "424eb433-2b3a-4859-beaf-804d8af0afd7";
	public name: string = "Control Points";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Extract the nurbs control points and knots of a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}