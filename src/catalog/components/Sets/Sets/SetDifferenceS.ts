import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SetDifferenceS extends ResthopperComponent {

	public guid: string = "d2461702-3164-4894-8c10-ed1fc4b52965";
	public name: string = "SetDifferenceS";
	public nickName: string = "ExDiff";
	public category: string = "Sets";
	public subCategory: string = "Sets";
	public description: string = "Create the symmetric difference of two sets (the collection of objects present in A or B but not both).";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"seta_a": SetDifferenceSInput_seta_a,
		"setb_b": SetDifferenceSInput_setb_b,
	}

	public output:
	{
		"exdifference_x": SetDifferenceSOutput_exdifference_x,
	}

	constructor() {
		super();
		this.input = {
			"seta_a": new SetDifferenceSInput_seta_a(),
			"setb_b": new SetDifferenceSInput_setb_b(),
		}
		this.output = {
			"exdifference_x": new SetDifferenceSOutput_exdifference_x(),
		}
	}

}

class SetDifferenceSInput_seta_a extends ResthopperParameter {

	public name: string = "SetA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetDifferenceSInput_setb_b extends ResthopperParameter {

	public name: string = "SetB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SetDifferenceSOutput_exdifference_x extends ResthopperParameter {

	public name: string = "ExDifference";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
