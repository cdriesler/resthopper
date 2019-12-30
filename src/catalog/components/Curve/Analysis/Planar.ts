import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Planar extends ResthopperComponent {

	public guid: string = "5816ec9c-f170-4c59-ac44-364401ff84cd";
	public name: string = "Planar";
	public nickName: string = "Planar";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Test a curve for planarity.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curve_c": PlanarInput_curve_c,
	}

	public output:
	{
		"planar_p": PlanarOutput_planar_p,
		"plane_p": PlanarOutput_plane_p,
		"deviation_d": PlanarOutput_deviation_d,
	}

	constructor() {
		super();
		this.input = {
			"curve_c": new PlanarInput_curve_c(),
		}
		this.output = {
			"planar_p": new PlanarOutput_planar_p(),
			"plane_p": new PlanarOutput_plane_p(),
			"deviation_d": new PlanarOutput_deviation_d(),
		}
	}

}

class PlanarInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public description: string = "Curve to evaluate"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanarOutput_planar_p extends ResthopperParameter {

	public name: string = "Planar";
	public nickName: string = "p";
	public description: string = "Planarity of curve"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanarOutput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Curve plane"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PlanarOutput_deviation_d extends ResthopperParameter {

	public name: string = "Deviation";
	public nickName: string = "D";
	public description: string = "Deviation from curve plane"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
