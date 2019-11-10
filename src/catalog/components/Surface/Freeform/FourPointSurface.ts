import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FourPointSurface extends ResthopperComponent {

	public guid: string = "c77a8b3b-c569-4d81-9b59-1c27299a1c45";
	public name: string = "4PointSurface";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a surface connecting three or four corner points.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"CornerA_A": FourPointSurfaceInput_CornerA_A,
		"CornerB_B": FourPointSurfaceInput_CornerB_B,
		"CornerC_C": FourPointSurfaceInput_CornerC_C,
		"CornerD_D": FourPointSurfaceInput_CornerD_D,
	}

	public output:
	{
		"Surface_S": FourPointSurfaceOutput_Surface_S,
	}

	constructor() {
		super();
		this.input = {
			"CornerA_A": new FourPointSurfaceInput_CornerA_A(),
			"CornerB_B": new FourPointSurfaceInput_CornerB_B(),
			"CornerC_C": new FourPointSurfaceInput_CornerC_C(),
			"CornerD_D": new FourPointSurfaceInput_CornerD_D(),
		}
		this.output = {
			"Surface_S": new FourPointSurfaceOutput_Surface_S(),
		}
	}

}

class FourPointSurfaceInput_CornerA_A extends ResthopperParameter {

	public name: string = "CornerA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FourPointSurfaceInput_CornerB_B extends ResthopperParameter {

	public name: string = "CornerB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FourPointSurfaceInput_CornerC_C extends ResthopperParameter {

	public name: string = "CornerC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FourPointSurfaceInput_CornerD_D extends ResthopperParameter {

	public name: string = "CornerD";
	public nickName: string = "D";
	public isOptional: boolean = true;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FourPointSurfaceOutput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
