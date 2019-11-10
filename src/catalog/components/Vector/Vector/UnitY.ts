import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class UnitY extends ResthopperComponent {

	public guid: string = "d3d195ea-2d59-4ffa-90b1-8b7ff3369f69";
	public name: string = "UnitY";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Unit vector parallel to the world {y} axis.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"factor_f": UnitYInput_factor_f,
	}

	public output:
	{
		"unitvector_v": UnitYOutput_unitvector_v,
	}

	constructor() {
		super();
		this.input = {
			"factor_f": new UnitYInput_factor_f(),
		}
		this.output = {
			"unitvector_v": new UnitYOutput_unitvector_v(),
		}
	}

}

class UnitYInput_factor_f extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UnitYOutput_unitvector_v extends ResthopperParameter {

	public name: string = "Unitvector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
