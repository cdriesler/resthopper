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

	public library: string = "Surface Components";

	public input:
	{
		"Breps_B": BrepJoinInput_Breps_B,
	}

	public output:
	{
		"Breps_B": BrepJoinOutput_Breps_B,
		"Closed_C": BrepJoinOutput_Closed_C,
	}

	constructor() {
		super();
		this.input = {
			"Breps_B": new BrepJoinInput_Breps_B(),
		}
		this.output = {
			"Breps_B": new BrepJoinOutput_Breps_B(),
			"Closed_C": new BrepJoinOutput_Closed_C(),
		}
	}

}

class BrepJoinInput_Breps_B extends ResthopperParameter {

	public name: string = "Breps";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepJoinOutput_Breps_B extends ResthopperParameter {

	public name: string = "Breps";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepJoinOutput_Closed_C extends ResthopperParameter {

	public name: string = "Closed";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
