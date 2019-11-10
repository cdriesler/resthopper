import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Discontinuity extends ResthopperComponent {

	public guid: string = "269eaa85-9997-4d77-a9ba-4c58cb45c9d3";
	public name: string = "Discontinuity";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Find all discontinuities along a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": DiscontinuityInput_Curve_C,
		"Level_L": DiscontinuityInput_Level_L,
	}

	public output:
	{
		"Points_P": DiscontinuityOutput_Points_P,
		"Parameters_t": DiscontinuityOutput_Parameters_t,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new DiscontinuityInput_Curve_C(),
			"Level_L": new DiscontinuityInput_Level_L(),
		}
		this.output = {
			"Points_P": new DiscontinuityOutput_Points_P(),
			"Parameters_t": new DiscontinuityOutput_Parameters_t(),
		}
	}

}

class DiscontinuityInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DiscontinuityInput_Level_L extends ResthopperParameter {

	public name: string = "Level";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DiscontinuityOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DiscontinuityOutput_Parameters_t extends ResthopperParameter {

	public name: string = "Parameters";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
