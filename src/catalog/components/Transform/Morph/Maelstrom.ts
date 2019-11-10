import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Maelstrom extends ResthopperComponent {

	public guid: string = "134a849b-0ff4-4f36-bdd5-95e3996bae8b";
	public name: string = "Maelstrom";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Spirally deforms objects as if they were caught in a whirlpool";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": MaelstromInput_Geometry_G,
		"Plane_P": MaelstromInput_Plane_P,
		"First_R0": MaelstromInput_First_R0,
		"Second_R1": MaelstromInput_Second_R1,
		"Angle_A": MaelstromInput_Angle_A,
		"Rigid_R": MaelstromInput_Rigid_R,
	}

	public output:
	{
		"Geometry_G": MaelstromOutput_Geometry_G,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new MaelstromInput_Geometry_G(),
			"Plane_P": new MaelstromInput_Plane_P(),
			"First_R0": new MaelstromInput_First_R0(),
			"Second_R1": new MaelstromInput_Second_R1(),
			"Angle_A": new MaelstromInput_Angle_A(),
			"Rigid_R": new MaelstromInput_Rigid_R(),
		}
		this.output = {
			"Geometry_G": new MaelstromOutput_Geometry_G(),
		}
	}

}

class MaelstromInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaelstromInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaelstromInput_First_R0 extends ResthopperParameter {

	public name: string = "First";
	public nickName: string = "R0";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaelstromInput_Second_R1 extends ResthopperParameter {

	public name: string = "Second";
	public nickName: string = "R1";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaelstromInput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaelstromInput_Rigid_R extends ResthopperParameter {

	public name: string = "Rigid";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaelstromOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
