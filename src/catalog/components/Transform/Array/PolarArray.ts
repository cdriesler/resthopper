import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PolarArray extends ResthopperComponent {

	public guid: string = "fca5ad7e-ecac-401d-a357-edda0a251cbc";
	public name: string = "PolarArray";
	public category: string = "Transform";
	public subCategory: string = "Array";
	public description: string = "Create a polar array of geometry.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": PolarArrayInput_Geometry_G,
		"Plane_P": PolarArrayInput_Plane_P,
		"Count_N": PolarArrayInput_Count_N,
		"Angle_A": PolarArrayInput_Angle_A,
	}

	public output:
	{
		"Geometry_G": PolarArrayOutput_Geometry_G,
		"Transform_X": PolarArrayOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new PolarArrayInput_Geometry_G(),
			"Plane_P": new PolarArrayInput_Plane_P(),
			"Count_N": new PolarArrayInput_Count_N(),
			"Angle_A": new PolarArrayInput_Angle_A(),
		}
		this.output = {
			"Geometry_G": new PolarArrayOutput_Geometry_G(),
			"Transform_X": new PolarArrayOutput_Transform_X(),
		}
	}

}

class PolarArrayInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolarArrayInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolarArrayInput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolarArrayInput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolarArrayOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PolarArrayOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
