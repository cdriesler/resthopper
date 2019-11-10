import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Substrate extends ResthopperComponent {

	public guid: string = "415750fd-c0ec-4411-84d0-01f28ab23066";
	public name: string = "Substrate";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Substrate algorithm inspired by Jared Tarbell (Complexification.net)";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"Border_B": SubstrateInput_Border_B,
		"Count_N": SubstrateInput_Count_N,
		"Angles_A": SubstrateInput_Angles_A,
		"Deviation_D": SubstrateInput_Deviation_D,
		"Seed_S": SubstrateInput_Seed_S,
	}

	public output:
	{
		"Substrate_S": SubstrateOutput_Substrate_S,
	}

	constructor() {
		super();
		this.input = {
			"Border_B": new SubstrateInput_Border_B(),
			"Count_N": new SubstrateInput_Count_N(),
			"Angles_A": new SubstrateInput_Angles_A(),
			"Deviation_D": new SubstrateInput_Deviation_D(),
			"Seed_S": new SubstrateInput_Seed_S(),
		}
		this.output = {
			"Substrate_S": new SubstrateOutput_Substrate_S(),
		}
	}

}

class SubstrateInput_Border_B extends ResthopperParameter {

	public name: string = "Border";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubstrateInput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubstrateInput_Angles_A extends ResthopperParameter {

	public name: string = "Angles";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubstrateInput_Deviation_D extends ResthopperParameter {

	public name: string = "Deviation";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubstrateInput_Seed_S extends ResthopperParameter {

	public name: string = "Seed";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubstrateOutput_Substrate_S extends ResthopperParameter {

	public name: string = "Substrate";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
