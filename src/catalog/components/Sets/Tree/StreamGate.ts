import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class StreamGate extends ResthopperComponent {

	public guid: string = "71fcc052-6add-4d70-8d97-cfb37ea9d169";
	public name: string = "StreamGate";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Redirects a stream into specific outputs.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Stream_S": StreamGateInput_Stream_S,
		"Gate_G": StreamGateInput_Gate_G,
	}

	public output:
	{
		"Target0_0": StreamGateOutput_Target0_0,
		"Target1_1": StreamGateOutput_Target1_1,
	}

	constructor() {
		super();
		this.input = {
			"Stream_S": new StreamGateInput_Stream_S(),
			"Gate_G": new StreamGateInput_Gate_G(),
		}
		this.output = {
			"Target0_0": new StreamGateOutput_Target0_0(),
			"Target1_1": new StreamGateOutput_Target1_1(),
		}
	}

}

class StreamGateInput_Stream_S extends ResthopperParameter {

	public name: string = "Stream";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StreamGateInput_Gate_G extends ResthopperParameter {

	public name: string = "Gate";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StreamGateOutput_Target0_0 extends ResthopperParameter {

	public name: string = "Target0";
	public nickName: string = "0";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StreamGateOutput_Target1_1 extends ResthopperParameter {

	public name: string = "Target1";
	public nickName: string = "1";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
