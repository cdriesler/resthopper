import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SpatialDeformcustom extends ResthopperComponent {

	public guid: string = "331b74f1-1f1f-4f37-b253-24fcdada29e3";
	public name: string = "Spatial Deform (custom)";
	public nickName: string = "Deform";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Perform spatial deformation based on custom space syntax.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": SpatialDeformcustomInput_geometry_g,
		"syntax_s": SpatialDeformcustomInput_syntax_s,
		"forces_f": SpatialDeformcustomInput_forces_f,
		"falloff_f": SpatialDeformcustomInput_falloff_f,
	}

	public output:
	{
		"geometry_g": SpatialDeformcustomOutput_geometry_g,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new SpatialDeformcustomInput_geometry_g(),
			"syntax_s": new SpatialDeformcustomInput_syntax_s(),
			"forces_f": new SpatialDeformcustomInput_forces_f(),
			"falloff_f": new SpatialDeformcustomInput_falloff_f(),
		}
		this.output = {
			"geometry_g": new SpatialDeformcustomOutput_geometry_g(),
		}
	}

}

class SpatialDeformcustomInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Geometry to deform"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpatialDeformcustomInput_syntax_s extends ResthopperParameter {

	public name: string = "Syntax";
	public nickName: string = "S";
	public description: string = "Points describing space syntax."
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpatialDeformcustomInput_forces_f extends ResthopperParameter {

	public name: string = "Forces";
	public nickName: string = "F";
	public description: string = "Forces (one for each point in space"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpatialDeformcustomInput_falloff_f extends ResthopperParameter {

	public name: string = "Falloff";
	public nickName: string = "f";
	public description: string = "Falloff function (for variable 'x')"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SpatialDeformcustomOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Deformed geometry"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
