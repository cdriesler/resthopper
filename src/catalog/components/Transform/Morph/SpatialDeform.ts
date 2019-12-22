import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SpatialDeform extends ResthopperComponent {

	public guid: string = "66e6596f-6c8f-4ac3-99e0-0c4b7a59a7f7";
	public name: string = "Spatial Deform";
	public nickName: string = "Deform";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Perform spatial deformation based on custom space syntax.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": SpatialDeformInput_geometry_g,
		"syntax_s": SpatialDeformInput_syntax_s,
		"forces_f": SpatialDeformInput_forces_f,
	}

	public output:
	{
		"geometry_g": SpatialDeformOutput_geometry_g,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new SpatialDeformInput_geometry_g(),
			"syntax_s": new SpatialDeformInput_syntax_s(),
			"forces_f": new SpatialDeformInput_forces_f(),
		}
		this.output = {
			"geometry_g": new SpatialDeformOutput_geometry_g(),
		}
	}

}

class SpatialDeformInput_geometry_g extends ResthopperParameter {

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

class SpatialDeformInput_syntax_s extends ResthopperParameter {

	public name: string = "Syntax";
	public nickName: string = "S";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpatialDeformInput_forces_f extends ResthopperParameter {

	public name: string = "Forces";
	public nickName: string = "F";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpatialDeformOutput_geometry_g extends ResthopperParameter {

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
