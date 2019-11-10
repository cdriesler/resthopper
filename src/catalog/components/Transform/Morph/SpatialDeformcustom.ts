import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SpatialDeformcustom extends ResthopperComponent {

	public guid: string = "331b74f1-1f1f-4f37-b253-24fcdada29e3";
	public name: string = "SpatialDeformcustom";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Perform spatial deformation based on custom space syntax.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": SpatialDeformcustomInput_Geometry_G,
		"Syntax_S": SpatialDeformcustomInput_Syntax_S,
		"Forces_F": SpatialDeformcustomInput_Forces_F,
		"Falloff_f": SpatialDeformcustomInput_Falloff_f,
	}

	public output:
	{
		"Geometry_G": SpatialDeformcustomOutput_Geometry_G,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new SpatialDeformcustomInput_Geometry_G(),
			"Syntax_S": new SpatialDeformcustomInput_Syntax_S(),
			"Forces_F": new SpatialDeformcustomInput_Forces_F(),
			"Falloff_f": new SpatialDeformcustomInput_Falloff_f(),
		}
		this.output = {
			"Geometry_G": new SpatialDeformcustomOutput_Geometry_G(),
		}
	}

}

class SpatialDeformcustomInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpatialDeformcustomInput_Syntax_S extends ResthopperParameter {

	public name: string = "Syntax";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpatialDeformcustomInput_Forces_F extends ResthopperParameter {

	public name: string = "Forces";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpatialDeformcustomInput_Falloff_f extends ResthopperParameter {

	public name: string = "Falloff";
	public nickName: string = "f";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpatialDeformcustomOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
