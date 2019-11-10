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
		"border_b": SubstrateInput_border_b,
		"count_n": SubstrateInput_count_n,
		"angles_a": SubstrateInput_angles_a,
		"deviation_d": SubstrateInput_deviation_d,
		"seed_s": SubstrateInput_seed_s,
	}

	public output:
	{
		"substrate_s": SubstrateOutput_substrate_s,
	}

	constructor() {
		super();
		this.input = {
			"border_b": new SubstrateInput_border_b(),
			"count_n": new SubstrateInput_count_n(),
			"angles_a": new SubstrateInput_angles_a(),
			"deviation_d": new SubstrateInput_deviation_d(),
			"seed_s": new SubstrateInput_seed_s(),
		}
		this.output = {
			"substrate_s": new SubstrateOutput_substrate_s(),
		}
	}

}

class SubstrateInput_border_b extends ResthopperParameter {

	public name: string = "Border";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubstrateInput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubstrateInput_angles_a extends ResthopperParameter {

	public name: string = "Angles";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubstrateInput_deviation_d extends ResthopperParameter {

	public name: string = "Deviation";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubstrateInput_seed_s extends ResthopperParameter {

	public name: string = "Seed";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubstrateOutput_substrate_s extends ResthopperParameter {

	public name: string = "Substrate";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
