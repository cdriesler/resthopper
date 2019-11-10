import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Angle extends ResthopperComponent {

	public guid: string = "b464fccb-50e7-41bd-9789-8438db9bea9f";
	public name: string = "Angle";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Compute the angle between two vectors.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"VectorA_A": AngleInput_VectorA_A,
		"VectorB_B": AngleInput_VectorB_B,
		"Plane_P": AngleInput_Plane_P,
	}

	public output:
	{
		"Angle_A": AngleOutput_Angle_A,
		"Reflex_R": AngleOutput_Reflex_R,
	}

	constructor() {
		super();
		this.input = {
			"VectorA_A": new AngleInput_VectorA_A(),
			"VectorB_B": new AngleInput_VectorB_B(),
			"Plane_P": new AngleInput_Plane_P(),
		}
		this.output = {
			"Angle_A": new AngleOutput_Angle_A(),
			"Reflex_R": new AngleOutput_Reflex_R(),
		}
	}

}

class AngleInput_VectorA_A extends ResthopperParameter {

	public name: string = "VectorA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngleInput_VectorB_B extends ResthopperParameter {

	public name: string = "VectorB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngleInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngleOutput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngleOutput_Reflex_R extends ResthopperParameter {

	public name: string = "Reflex";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
