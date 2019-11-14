import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RailRevolution extends ResthopperComponent {

	public guid: string = "d8d68c35-f869-486d-adf3-69ee3cc2d501";
	public name: string = "RailRevolution";
	public nickName: string = "RailRev";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a surface of revolution using a sweep rail.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"curve_p": RailRevolutionInput_curve_p,
		"rail_r": RailRevolutionInput_rail_r,
		"axis_a": RailRevolutionInput_axis_a,
		"scale_s": RailRevolutionInput_scale_s,
	}

	public output:
	{
		"surface_s": RailRevolutionOutput_surface_s,
	}

	constructor() {
		super();
		this.input = {
			"curve_p": new RailRevolutionInput_curve_p(),
			"rail_r": new RailRevolutionInput_rail_r(),
			"axis_a": new RailRevolutionInput_axis_a(),
			"scale_s": new RailRevolutionInput_scale_s(),
		}
		this.output = {
			"surface_s": new RailRevolutionOutput_surface_s(),
		}
	}

}

class RailRevolutionInput_curve_p extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RailRevolutionInput_rail_r extends ResthopperParameter {

	public name: string = "Rail";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RailRevolutionInput_axis_a extends ResthopperParameter {

	public name: string = "Axis";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RailRevolutionInput_scale_s extends ResthopperParameter {

	public name: string = "Scale";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RailRevolutionOutput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
