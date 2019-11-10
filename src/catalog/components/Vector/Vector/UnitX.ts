import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class UnitX extends ResthopperComponent {

	public guid: string = "79f9fbb3-8f1d-4d9a-88a9-f7961b1012cd";
	public name: string = "UnitX";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Unit vector parallel to the world {x} axis.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Factor_F": UnitXInput_Factor_F,
	}

	public output:
	{
		"Unitvector_V": UnitXOutput_Unitvector_V,
	}

	constructor() {
		super();
		this.input = {
			"Factor_F": new UnitXInput_Factor_F(),
		}
		this.output = {
			"Unitvector_V": new UnitXOutput_Unitvector_V(),
		}
	}

}

class UnitXInput_Factor_F extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UnitXOutput_Unitvector_V extends ResthopperParameter {

	public name: string = "Unitvector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
