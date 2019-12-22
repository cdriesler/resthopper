import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointOnCurve extends ResthopperComponent {

	public guid: string = "7f6a9d34-0470-4bb7-aadd-07496bcbe572";
	public name: string = "Point On Curve";
	public nickName: string = "CurvePoint";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Evaluates a curve at a specific location";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{

	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {

		}
		this.output = {

		}
	}

}
