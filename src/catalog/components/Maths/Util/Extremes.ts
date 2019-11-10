import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Extremes extends ResthopperComponent {

	public guid: string = "37084b3f-2b66-4f3a-9737-80d0b0b7f0cb";
	public name: string = "Extremes";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Find the extremes in a list of values";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"a_a": ExtremesInput_a_a,
		"b_b": ExtremesInput_b_b,
	}

	public output:
	{
		"maximum_v": ExtremesOutput_maximum_v,
	}

	constructor() {
		super();
		this.input = {
			"a_a": new ExtremesInput_a_a(),
			"b_b": new ExtremesInput_b_b(),
		}
		this.output = {
			"maximum_v": new ExtremesOutput_maximum_v(),
		}
	}

}

class ExtremesInput_a_a extends ResthopperParameter {

	public name: string = "A";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtremesInput_b_b extends ResthopperParameter {

	public name: string = "B";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExtremesOutput_maximum_v extends ResthopperParameter {

	public name: string = "Maximum";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
