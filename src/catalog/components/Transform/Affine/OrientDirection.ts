import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OrientDirection extends ResthopperComponent {

	public guid: string = "1602b2cc-007c-4b79-8926-0067c6184e44";
	public name: string = "OrientDirection";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Orient an object using directional constraints only.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": OrientDirectionInput_Geometry_G,
		"PointA_pA": OrientDirectionInput_PointA_pA,
		"DirectionA_dA": OrientDirectionInput_DirectionA_dA,
		"PointB_pB": OrientDirectionInput_PointB_pB,
		"DirectionB_dB": OrientDirectionInput_DirectionB_dB,
	}

	public output:
	{
		"Geometry_G": OrientDirectionOutput_Geometry_G,
		"Transform_X": OrientDirectionOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new OrientDirectionInput_Geometry_G(),
			"PointA_pA": new OrientDirectionInput_PointA_pA(),
			"DirectionA_dA": new OrientDirectionInput_DirectionA_dA(),
			"PointB_pB": new OrientDirectionInput_PointB_pB(),
			"DirectionB_dB": new OrientDirectionInput_DirectionB_dB(),
		}
		this.output = {
			"Geometry_G": new OrientDirectionOutput_Geometry_G(),
			"Transform_X": new OrientDirectionOutput_Transform_X(),
		}
	}

}

class OrientDirectionInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrientDirectionInput_PointA_pA extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "pA";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrientDirectionInput_DirectionA_dA extends ResthopperParameter {

	public name: string = "DirectionA";
	public nickName: string = "dA";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrientDirectionInput_PointB_pB extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "pB";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrientDirectionInput_DirectionB_dB extends ResthopperParameter {

	public name: string = "DirectionB";
	public nickName: string = "dB";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrientDirectionOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrientDirectionOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
