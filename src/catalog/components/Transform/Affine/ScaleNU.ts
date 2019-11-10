import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ScaleNU extends ResthopperComponent {

	public guid: string = "290f418a-65ee-406a-a9d0-35699815b512";
	public name: string = "ScaleNU";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Scale an object with non-uniform factors.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": ScaleNUInput_Geometry_G,
		"Plane_P": ScaleNUInput_Plane_P,
		"ScaleX_X": ScaleNUInput_ScaleX_X,
		"ScaleY_Y": ScaleNUInput_ScaleY_Y,
		"ScaleZ_Z": ScaleNUInput_ScaleZ_Z,
	}

	public output:
	{
		"Geometry_G": ScaleNUOutput_Geometry_G,
		"Transform_X": ScaleNUOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new ScaleNUInput_Geometry_G(),
			"Plane_P": new ScaleNUInput_Plane_P(),
			"ScaleX_X": new ScaleNUInput_ScaleX_X(),
			"ScaleY_Y": new ScaleNUInput_ScaleY_Y(),
			"ScaleZ_Z": new ScaleNUInput_ScaleZ_Z(),
		}
		this.output = {
			"Geometry_G": new ScaleNUOutput_Geometry_G(),
			"Transform_X": new ScaleNUOutput_Transform_X(),
		}
	}

}

class ScaleNUInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScaleNUInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScaleNUInput_ScaleX_X extends ResthopperParameter {

	public name: string = "ScaleX";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScaleNUInput_ScaleY_Y extends ResthopperParameter {

	public name: string = "ScaleY";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScaleNUInput_ScaleZ_Z extends ResthopperParameter {

	public name: string = "ScaleZ";
	public nickName: string = "Z";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScaleNUOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScaleNUOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
