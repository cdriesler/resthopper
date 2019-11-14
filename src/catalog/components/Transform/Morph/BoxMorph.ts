import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoxMorph extends ResthopperComponent {

	public guid: string = "d8940ff0-dd4a-4e74-9361-54df537b50db";
	public name: string = "BoxMorph";
	public nickName: string = "Morph";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Morph an object into a twisted box.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": BoxMorphInput_geometry_g,
		"reference_r": BoxMorphInput_reference_r,
		"target_t": BoxMorphInput_target_t,
	}

	public output:
	{
		"geometry_g": BoxMorphOutput_geometry_g,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new BoxMorphInput_geometry_g(),
			"reference_r": new BoxMorphInput_reference_r(),
			"target_t": new BoxMorphInput_target_t(),
		}
		this.output = {
			"geometry_g": new BoxMorphOutput_geometry_g(),
		}
	}

}

class BoxMorphInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxMorphInput_reference_r extends ResthopperParameter {

	public name: string = "Reference";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxMorphInput_target_t extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Twisted Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxMorphOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
