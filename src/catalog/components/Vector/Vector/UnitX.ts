import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class UnitX extends ResthopperComponent {

	public guid: string = "79f9fbb3-8f1d-4d9a-88a9-f7961b1012cd";
	public name: string = "Unit X";
	public nickName: string = "X";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Unit vector parallel to the world {x} axis.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"factor_f": UnitXInput_factor_f,
	}

	public output:
	{
		"unitvector_v": UnitXOutput_unitvector_v,
	}

	constructor() {
		super();
		this.input = {
			"factor_f": new UnitXInput_factor_f(),
		}
		this.output = {
			"unitvector_v": new UnitXOutput_unitvector_v(),
		}
	}

}

class UnitXInput_factor_f extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "F";
	public description: string = "Unit multiplication"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UnitXOutput_unitvector_v extends ResthopperParameter {

	public name: string = "Unitvector";
	public nickName: string = "V";
	public description: string = "World {x} vector"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
