import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class UnitZ extends ResthopperComponent {

	public guid: string = "9103c240-a6a9-4223-9b42-dbd19bf38e2b";
	public name: string = "UnitZ";
	public nickName: string = "Z";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Unit vector parallel to the world {z} axis.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"factor_f": UnitZInput_factor_f,
	}

	public output:
	{
		"unitvector_v": UnitZOutput_unitvector_v,
	}

	constructor() {
		super();
		this.input = {
			"factor_f": new UnitZInput_factor_f(),
		}
		this.output = {
			"unitvector_v": new UnitZOutput_unitvector_v(),
		}
	}

}

class UnitZInput_factor_f extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UnitZOutput_unitvector_v extends ResthopperParameter {

	public name: string = "Unitvector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
