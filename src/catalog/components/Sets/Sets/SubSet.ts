import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubSet extends ResthopperComponent {

	public guid: string = "4cfc0bb0-0745-4772-a520-39f9bf3d99bc";
	public name: string = "SubSet";
	public nickName: string = "SubSet";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Test two sets for inclusion.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"seta_a": SubSetInput_seta_a,
		"setb_b": SubSetInput_setb_b,
	}

	public output:
	{
		"result_r": SubSetOutput_result_r,
	}

	constructor() {
		super();
		this.input = {
			"seta_a": new SubSetInput_seta_a(),
			"setb_b": new SubSetInput_setb_b(),
		}
		this.output = {
			"result_r": new SubSetOutput_result_r(),
		}
	}

}

class SubSetInput_seta_a extends ResthopperParameter {

	public name: string = "SetA";
	public nickName: string = "A";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubSetInput_setb_b extends ResthopperParameter {

	public name: string = "SetB";
	public nickName: string = "B";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubSetOutput_result_r extends ResthopperParameter {

	public name: string = "Result";
	public nickName: string = "R";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
