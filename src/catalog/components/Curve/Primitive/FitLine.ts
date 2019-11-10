import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FitLine extends ResthopperComponent {

	public guid: string = "1f798a28-9de6-47b5-8201-cac57256b777";
	public name: string = "FitLine";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Fit a line to a collection of points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Points_P": FitLineInput_Points_P,
	}

	public output:
	{
		"Line_L": FitLineOutput_Line_L,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new FitLineInput_Points_P(),
		}
		this.output = {
			"Line_L": new FitLineOutput_Line_L(),
		}
	}

}

class FitLineInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FitLineOutput_Line_L extends ResthopperParameter {

	public name: string = "Line";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
