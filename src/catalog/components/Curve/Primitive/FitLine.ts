import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FitLine extends ResthopperComponent {

	public guid: string = "1f798a28-9de6-47b5-8201-cac57256b777";
	public name: string = "FitLine";
	public nickName: string = "FLine";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Fit a line to a collection of points.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"points_p": FitLineInput_points_p,
	}

	public output:
	{
		"line_l": FitLineOutput_line_l,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new FitLineInput_points_p(),
		}
		this.output = {
			"line_l": new FitLineOutput_line_l(),
		}
	}

}

class FitLineInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FitLineOutput_line_l extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
