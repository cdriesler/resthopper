import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class StreamGate extends ResthopperComponent {

	public guid: string = "71fcc052-6add-4d70-8d97-cfb37ea9d169";
	public name: string = "Stream Gate";
	public nickName: string = "Gate";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Redirects a stream into specific outputs.";
	public isObsolete: boolean = false;
	public isVariable: boolean = true;

	public library: string = "Grasshopper";

	public input:
	{
		"stream_s": StreamGateInput_stream_s,
		"gate_g": StreamGateInput_gate_g,
	}

	public output:
	{
		"target0_0": StreamGateOutput_target0_0,
		"target1_1": StreamGateOutput_target1_1,
	}

	constructor() {
		super();
		this.input = {
			"stream_s": new StreamGateInput_stream_s(),
			"gate_g": new StreamGateInput_gate_g(),
		}
		this.output = {
			"target0_0": new StreamGateOutput_target0_0(),
			"target1_1": new StreamGateOutput_target1_1(),
		}
	}

}

class StreamGateInput_stream_s extends ResthopperParameter {

	public name: string = "Stream";
	public nickName: string = "S";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StreamGateInput_gate_g extends ResthopperParameter {

	public name: string = "Gate";
	public nickName: string = "G";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StreamGateOutput_target0_0 extends ResthopperParameter {

	public name: string = "Target0";
	public nickName: string = "0";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StreamGateOutput_target1_1 extends ResthopperParameter {

	public name: string = "Target1";
	public nickName: string = "1";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
