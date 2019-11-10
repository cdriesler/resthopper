import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Sporph extends ResthopperComponent {

	public guid: string = "9cacad37-b09f-4b54-b2b1-1ccdc2e3ffea";
	public name: string = "Sporph";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Deforms an object from a source surface to a target surface";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": SporphInput_Geometry_G,
		"Base_S0": SporphInput_Base_S0,
		"Parameter_P0": SporphInput_Parameter_P0,
		"Target_S1": SporphInput_Target_S1,
		"Parameter_P1": SporphInput_Parameter_P1,
		"Rigid_R": SporphInput_Rigid_R,
	}

	public output:
	{
		"Geometry_G": SporphOutput_Geometry_G,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new SporphInput_Geometry_G(),
			"Base_S0": new SporphInput_Base_S0(),
			"Parameter_P0": new SporphInput_Parameter_P0(),
			"Target_S1": new SporphInput_Target_S1(),
			"Parameter_P1": new SporphInput_Parameter_P1(),
			"Rigid_R": new SporphInput_Rigid_R(),
		}
		this.output = {
			"Geometry_G": new SporphOutput_Geometry_G(),
		}
	}

}

class SporphInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SporphInput_Base_S0 extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "S0";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SporphInput_Parameter_P0 extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "P0";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SporphInput_Target_S1 extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "S1";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SporphInput_Parameter_P1 extends ResthopperParameter {

	public name: string = "Parameter";
	public nickName: string = "P1";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SporphInput_Rigid_R extends ResthopperParameter {

	public name: string = "Rigid";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SporphOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
