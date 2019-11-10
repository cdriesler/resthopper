import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BrepJoin extends ResthopperComponent {

	public guid: string = "1addcc85-b04e-46e6-bd4a-6f6c93bf7efd";
	public name: string = "BrepJoin";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Join a number of Breps together";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"breps_b": BrepJoinInput_breps_b,
	}

	public output:
	{
		"breps_b": BrepJoinOutput_breps_b,
		"closed_c": BrepJoinOutput_closed_c,
	}

	constructor() {
		super();
		this.input = {
			"breps_b": new BrepJoinInput_breps_b(),
		}
		this.output = {
			"breps_b": new BrepJoinOutput_breps_b(),
			"closed_c": new BrepJoinOutput_closed_c(),
		}
	}

}

class BrepJoinInput_breps_b extends ResthopperParameter {

	public name: string = "Breps";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepJoinOutput_breps_b extends ResthopperParameter {

	public name: string = "Breps";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepJoinOutput_closed_c extends ResthopperParameter {

	public name: string = "Closed";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
