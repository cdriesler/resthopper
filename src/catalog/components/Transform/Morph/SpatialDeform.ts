import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SpatialDeform extends ResthopperComponent {

	public guid: string = "66e6596f-6c8f-4ac3-99e0-0c4b7a59a7f7";
	public name: string = "SpatialDeform";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Perform spatial deformation based on custom space syntax.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": SpatialDeformInput_Geometry_G,
		"Syntax_S": SpatialDeformInput_Syntax_S,
		"Forces_F": SpatialDeformInput_Forces_F,
	}

	public output:
	{
		"Geometry_G": SpatialDeformOutput_Geometry_G,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new SpatialDeformInput_Geometry_G(),
			"Syntax_S": new SpatialDeformInput_Syntax_S(),
			"Forces_F": new SpatialDeformInput_Forces_F(),
		}
		this.output = {
			"Geometry_G": new SpatialDeformOutput_Geometry_G(),
		}
	}

}

class SpatialDeformInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpatialDeformInput_Syntax_S extends ResthopperParameter {

	public name: string = "Syntax";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpatialDeformInput_Forces_F extends ResthopperParameter {

	public name: string = "Forces";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpatialDeformOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
