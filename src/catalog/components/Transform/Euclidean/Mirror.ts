import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Mirror extends ResthopperComponent {

	public guid: string = "f12daa2f-4fd5-48c1-8ac3-5dea476912ca";
	public name: string = "Mirror";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Mirror an object.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": MirrorInput_Geometry_G,
		"Plane_P": MirrorInput_Plane_P,
	}

	public output:
	{
		"Geometry_G": MirrorOutput_Geometry_G,
		"Transform_X": MirrorOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new MirrorInput_Geometry_G(),
			"Plane_P": new MirrorInput_Plane_P(),
		}
		this.output = {
			"Geometry_G": new MirrorOutput_Geometry_G(),
			"Transform_X": new MirrorOutput_Transform_X(),
		}
	}

}

class MirrorInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MirrorInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MirrorOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MirrorOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
