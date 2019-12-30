import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Sporph extends ResthopperComponent {

	public guid: string = "9cacad37-b09f-4b54-b2b1-1ccdc2e3ffea";
	public name: string = "Sporph";
	public nickName: string = "Sporph";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Deforms an object from a source surface to a target surface";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": SporphInput_geometry_g,
		"base_s0": SporphInput_base_s0,
		"parameter_p0": SporphInput_parameter_p0,
		"target_s1": SporphInput_target_s1,
		"parameter_p1": SporphInput_parameter_p1,
		"rigid_r": SporphInput_rigid_r,
	}

	public output:
	{
		"geometry_g": SporphOutput_geometry_g,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new SporphInput_geometry_g(),
			"base_s0": new SporphInput_base_s0(),
			"parameter_p0": new SporphInput_parameter_p0(),
			"target_s1": new SporphInput_target_s1(),
			"parameter_p1": new SporphInput_parameter_p1(),
			"rigid_r": new SporphInput_rigid_r(),
		}
		this.output = {
			"geometry_g": new SporphOutput_geometry_g(),
		}
	}

}

class SporphInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Base geometry"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SporphInput_base_s0 extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "S0";
	public description: string = "Base surface"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SporphInput_parameter_p0 extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "P0";
	public description: string = "U,V parameter on base surface used for orienting."
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SporphInput_target_s1 extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "S1";
	public description: string = "Target surface"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SporphInput_parameter_p1 extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "P1";
	public description: string = "U,V parameter on target surface used for orienting."
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SporphInput_rigid_r extends ResthopperParameter {

	public name: string = "Rigid";
	public nickName: string = "R";
	public description: string = "Geometry will not be deformed as it is transformed"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SporphOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Morphed geometry"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
