import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SiftPattern extends ResthopperComponent {

	public guid: string = "3249222f-f536-467a-89f4-f0353fba455a";
	public name: string = "SiftPattern";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Sift elements in a list using a repeating index pattern.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"List_L": SiftPatternInput_List_L,
		"SiftPattern_P": SiftPatternInput_SiftPattern_P,
	}

	public output:
	{
		"Output0_0": SiftPatternOutput_Output0_0,
		"Output1_1": SiftPatternOutput_Output1_1,
	}

	constructor() {
		super();
		this.input = {
			"List_L": new SiftPatternInput_List_L(),
			"SiftPattern_P": new SiftPatternInput_SiftPattern_P(),
		}
		this.output = {
			"Output0_0": new SiftPatternOutput_Output0_0(),
			"Output1_1": new SiftPatternOutput_Output1_1(),
		}
	}

}

class SiftPatternInput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SiftPatternInput_SiftPattern_P extends ResthopperParameter {

	public name: string = "SiftPattern";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SiftPatternOutput_Output0_0 extends ResthopperParameter {

	public name: string = "Output0";
	public nickName: string = "0";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SiftPatternOutput_Output1_1 extends ResthopperParameter {

	public name: string = "Output1";
	public nickName: string = "1";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
