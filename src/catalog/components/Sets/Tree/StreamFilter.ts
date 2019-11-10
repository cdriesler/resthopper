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
		"Stream0_0": StreamFilterInput_Stream0_0,
		"Stream1_1": StreamFilterInput_Stream1_1,
		"Gate_G": StreamFilterInput_Gate_G,
	}

	public output:
	{
		"Stream_S": StreamFilterOutput_Stream_S,
	}

	constructor() {
		super();
		this.input = {
			"Stream0_0": new StreamFilterInput_Stream0_0(),
			"Stream1_1": new StreamFilterInput_Stream1_1(),
			"Gate_G": new StreamFilterInput_Gate_G(),
		}
		this.output = {
			"Stream_S": new StreamFilterOutput_Stream_S(),
		}
	}

}

class StreamFilterInput_Stream0_0 extends ResthopperParameter {

	public name: string = "Stream0";
	public nickName: string = "0";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StreamFilterInput_Stream1_1 extends ResthopperParameter {

	public name: string = "Stream1";
	public nickName: string = "1";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StreamFilterInput_Gate_G extends ResthopperParameter {

	public name: string = "Gate";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StreamFilterOutput_Stream_S extends ResthopperParameter {

	public name: string = "Stream";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
