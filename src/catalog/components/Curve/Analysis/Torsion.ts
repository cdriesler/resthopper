import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Torsion extends ResthopperComponent {

	public guid: string = "dbe9fce4-b6b3-465f-9615-34833c4763bd";
	public name: string = "Torsion";
	public nickName: string = "Torsion";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate the torsion of a curve at a specified parameter.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": TorsionInput_curve_c,
		"parameter_t": TorsionInput_parameter_t,
	}

	public output:
	{
		"point_p": TorsionOutput_point_p,
		"torsion_t": TorsionOutput_torsion_t,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new TorsionInput_curve_c(),
			"parameter_t": new TorsionInput_parameter_t(),
		}
		this.output = {
			"point_p": new TorsionOutput_point_p(),
			"torsion_t": new TorsionOutput_torsion_t(),
		}
	}

}

class TorsionInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TorsionInput_parameter_t extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TorsionOutput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TorsionOutput_torsion_t extends ResthopperParameter {

	public name: string = "Torsion";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
