import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Entwine extends ResthopperComponent {

	public guid: string = "c9785b8e-2f30-4f90-8ee3-cca710f82402";
	public name: string = "Entwine";
	public nickName: string = "Entwine";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Flatten and combine a collection of data streams";
	public isObsolete: boolean = false;
	public isVariable: boolean = true;

	public library: string = "Math Components";

	public input:
	{
		"branch00_00": EntwineInput_branch00_00,
		"branch01_01": EntwineInput_branch01_01,
		"branch02_02": EntwineInput_branch02_02,
	}

	public output:
	{
		"result_r": EntwineOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"branch00_00": new EntwineInput_branch00_00(),
			"branch01_01": new EntwineInput_branch01_01(),
			"branch02_02": new EntwineInput_branch02_02(),
		}
		this.output = {
			"result_r": new EntwineOutput_result_r(),
		}
	}

}

class EntwineInput_branch00_00 extends ResthopperParameter {

	public name: string = "Branch00";
	public nickName: string = "00";
	public description: string = "Data to entwine"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EntwineInput_branch01_01 extends ResthopperParameter {

	public name: string = "Branch01";
	public nickName: string = "01";
	public description: string = "Data to entwine"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EntwineInput_branch02_02 extends ResthopperParameter {

	public name: string = "Branch02";
	public nickName: string = "02";
	public description: string = "Data to entwine"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EntwineOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public description: string = "Entwined result"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
