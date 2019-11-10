import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class UnitZ extends ResthopperComponent {

	public guid: string = "9103c240-a6a9-4223-9b42-dbd19bf38e2b";
	public name: string = "UnitZ";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Unit vector parallel to the world {z} axis.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Factor_F": UnitZInput_Factor_F,
	}

	public output:
	{
		"Unitvector_V": UnitZOutput_Unitvector_V,
	}

	constructor() {
		super();
		this.input = {
			"Factor_F": new UnitZInput_Factor_F(),
		}
		this.output = {
			"Unitvector_V": new UnitZOutput_Unitvector_V(),
		}
	}

}

class UnitZInput_Factor_F extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UnitZOutput_Unitvector_V extends ResthopperParameter {

	public name: string = "Unitvector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
