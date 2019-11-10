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
		"Factor_F": UnitYInput_Factor_F,
	}

	public output:
	{
		"Unitvector_V": UnitYOutput_Unitvector_V,
	}

	constructor() {
		super();
		this.input = {
			"Factor_F": new UnitYInput_Factor_F(),
		}
		this.output = {
			"Unitvector_V": new UnitYOutput_Unitvector_V(),
		}
	}

}

class UnitYInput_Factor_F extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UnitYOutput_Unitvector_V extends ResthopperParameter {

	public name: string = "Unitvector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
