import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OrientDirection extends ResthopperComponent {

	public guid: string = "1602b2cc-007c-4b79-8926-0067c6184e44";
	public name: string = "Orient Direction";
	public nickName: string = "Orient";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Orient an object using directional constraints only.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": OrientDirectionInput_geometry_g,
		"pointa_pa": OrientDirectionInput_pointa_pa,
		"directiona_da": OrientDirectionInput_directiona_da,
		"pointb_pb": OrientDirectionInput_pointb_pb,
		"directionb_db": OrientDirectionInput_directionb_db,
	}

	public output:
	{
		"geometry_g": OrientDirectionOutput_geometry_g,
		"transform_x": OrientDirectionOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new OrientDirectionInput_geometry_g(),
			"pointa_pa": new OrientDirectionInput_pointa_pa(),
			"directiona_da": new OrientDirectionInput_directiona_da(),
			"pointb_pb": new OrientDirectionInput_pointb_pb(),
			"directionb_db": new OrientDirectionInput_directionb_db(),
		}
		this.output = {
			"geometry_g": new OrientDirectionOutput_geometry_g(),
			"transform_x": new OrientDirectionOutput_transform_x(),
		}
	}

}

class OrientDirectionInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Empty Geometry parameter"
	public isOptional: boolean = true;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrientDirectionInput_pointa_pa extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "pA";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrientDirectionInput_directiona_da extends ResthopperParameter {

	public name: string = "DirectionA";
	public nickName: string = "dA";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrientDirectionInput_pointb_pb extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "pB";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrientDirectionInput_directionb_db extends ResthopperParameter {

	public name: string = "DirectionB";
	public nickName: string = "dB";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrientDirectionOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Empty Geometry parameter"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrientDirectionOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public description: string = "Empty Transform parameter"
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
