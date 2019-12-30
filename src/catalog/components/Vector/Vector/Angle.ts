import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Angle extends ResthopperComponent {

	public guid: string = "b464fccb-50e7-41bd-9789-8438db9bea9f";
	public name: string = "Angle";
	public nickName: string = "Angle";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Compute the angle between two vectors.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"vectora_a": AngleInput_vectora_a,
		"vectorb_b": AngleInput_vectorb_b,
		"plane_p": AngleInput_plane_p,
	}

	public output:
	{
		"angle_a": AngleOutput_angle_a,
		"reflex_r": AngleOutput_reflex_r,
	}

	constructor() {
		super();
		this.input = {
			"vectora_a": new AngleInput_vectora_a(),
			"vectorb_b": new AngleInput_vectorb_b(),
			"plane_p": new AngleInput_plane_p(),
		}
		this.output = {
			"angle_a": new AngleOutput_angle_a(),
			"reflex_r": new AngleOutput_reflex_r(),
		}
	}

}

class AngleInput_vectora_a extends ResthopperParameter {

	public name: string = "VectorA";
	public nickName: string = "A";
	public description: string = "First vector"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngleInput_vectorb_b extends ResthopperParameter {

	public name: string = "VectorB";
	public nickName: string = "B";
	public description: string = "Second vector"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngleInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Optional plane for 2D angle"
	public isOptional: boolean = true;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngleOutput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public description: string = "Angle (in radians) between vectors"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AngleOutput_reflex_r extends ResthopperParameter {

	public name: string = "Reflex";
	public nickName: string = "R";
	public description: string = "Reflex angle (in radians) between vectors"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
