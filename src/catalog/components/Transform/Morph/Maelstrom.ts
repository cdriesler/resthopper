import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Maelstrom extends ResthopperComponent {

	public guid: string = "134a849b-0ff4-4f36-bdd5-95e3996bae8b";
	public name: string = "Maelstrom";
	public nickName: string = "Maelstrom";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Spirally deforms objects as if they were caught in a whirlpool";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": MaelstromInput_geometry_g,
		"plane_p": MaelstromInput_plane_p,
		"first_r0": MaelstromInput_first_r0,
		"second_r1": MaelstromInput_second_r1,
		"angle_a": MaelstromInput_angle_a,
		"rigid_r": MaelstromInput_rigid_r,
	}

	public output:
	{
		"geometry_g": MaelstromOutput_geometry_g,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new MaelstromInput_geometry_g(),
			"plane_p": new MaelstromInput_plane_p(),
			"first_r0": new MaelstromInput_first_r0(),
			"second_r1": new MaelstromInput_second_r1(),
			"angle_a": new MaelstromInput_angle_a(),
			"rigid_r": new MaelstromInput_rigid_r(),
		}
		this.output = {
			"geometry_g": new MaelstromOutput_geometry_g(),
		}
	}

}

class MaelstromInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Base geometry"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaelstromInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Spiral base plane."
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaelstromInput_first_r0 extends ResthopperParameter {

	public name: string = "First";
	public nickName: string = "R0";
	public description: string = "First radius"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaelstromInput_second_r1 extends ResthopperParameter {

	public name: string = "Second";
	public nickName: string = "R1";
	public description: string = "Second radius"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaelstromInput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public description: string = "Coil angle in radians"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaelstromInput_rigid_r extends ResthopperParameter {

	public name: string = "Rigid";
	public nickName: string = "R";
	public description: string = "Geometry will not be deformed as it is transformed"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MaelstromOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Morphed geometry"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
