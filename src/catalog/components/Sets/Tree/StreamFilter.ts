import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class StreamFilter extends ResthopperComponent {

	public guid: string = "eeafc956-268e-461d-8e73-ee05c6f72c01";
	public name: string = "StreamFilter";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Filters a collection of input streams";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"stream0_0": StreamFilterInput_stream0_0,
		"stream1_1": StreamFilterInput_stream1_1,
		"gate_g": StreamFilterInput_gate_g,
	}

	public output:
	{
		"stream_s": StreamFilterOutput_stream_s,
	}

	constructor() {
		super();
		this.input = {
			"stream0_0": new StreamFilterInput_stream0_0(),
			"stream1_1": new StreamFilterInput_stream1_1(),
			"gate_g": new StreamFilterInput_gate_g(),
		}
		this.output = {
			"stream_s": new StreamFilterOutput_stream_s(),
		}
	}

}

class StreamFilterInput_stream0_0 extends ResthopperParameter {

	public name: string = "Stream0";
	public nickName: string = "0";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StreamFilterInput_stream1_1 extends ResthopperParameter {

	public name: string = "Stream1";
	public nickName: string = "1";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StreamFilterInput_gate_g extends ResthopperParameter {

	public name: string = "Gate";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StreamFilterOutput_stream_s extends ResthopperParameter {

	public name: string = "Stream";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
