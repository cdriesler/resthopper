import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Entwine extends ResthopperComponent {

	public guid: string = "c9785b8e-2f30-4f90-8ee3-cca710f82402";
	public name: string = "Entwine";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Flatten and combine a collection of data streams";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Branch00_00": EntwineInput_Branch00_00,
		"Branch01_01": EntwineInput_Branch01_01,
		"Branch02_02": EntwineInput_Branch02_02,
	}

	public output:
	{
		"Result_R": EntwineOutput_Result_R,
	}

	constructor() {
		super();
		this.input = {
			"Branch00_00": new EntwineInput_Branch00_00(),
			"Branch01_01": new EntwineInput_Branch01_01(),
			"Branch02_02": new EntwineInput_Branch02_02(),
		}
		this.output = {
			"Result_R": new EntwineOutput_Result_R(),
		}
	}

}

class EntwineInput_Branch00_00 extends ResthopperParameter {

	public name: string = "Branch00";
	public nickName: string = "00";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EntwineInput_Branch01_01 extends ResthopperParameter {

	public name: string = "Branch01";
	public nickName: string = "01";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EntwineInput_Branch02_02 extends ResthopperParameter {

	public name: string = "Branch02";
	public nickName: string = "02";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EntwineOutput_Result_R extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
