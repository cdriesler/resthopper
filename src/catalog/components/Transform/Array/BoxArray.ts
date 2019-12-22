import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoxArray extends ResthopperComponent {

	public guid: string = "9f6f954c-ba7b-4428-bf1e-1768cdff666c";
	public name: string = "Box Array";
	public nickName: string = "ArrBox";
	public category: string = "Transform";
	public subCategory: string = "Array";
	public description: string = "Create a box array of geometry.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": BoxArrayInput_geometry_g,
		"cell_c": BoxArrayInput_cell_c,
		"xcount_x": BoxArrayInput_xcount_x,
		"ycount_y": BoxArrayInput_ycount_y,
		"zcount_z": BoxArrayInput_zcount_z,
	}

	public output:
	{
		"geometry_g": BoxArrayOutput_geometry_g,
		"transform_x": BoxArrayOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new BoxArrayInput_geometry_g(),
			"cell_c": new BoxArrayInput_cell_c(),
			"xcount_x": new BoxArrayInput_xcount_x(),
			"ycount_y": new BoxArrayInput_ycount_y(),
			"zcount_z": new BoxArrayInput_zcount_z(),
		}
		this.output = {
			"geometry_g": new BoxArrayOutput_geometry_g(),
			"transform_x": new BoxArrayOutput_transform_x(),
		}
	}

}

class BoxArrayInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Empty Geometry parameter"
	public isOptional: boolean = true;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxArrayInput_cell_c extends ResthopperParameter {

	public name: string = "Cell";
	public nickName: string = "C";
	public description: string = "Empty Box parameter"
	public isOptional: boolean = false;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxArrayInput_xcount_x extends ResthopperParameter {

	public name: string = "XCount";
	public nickName: string = "X";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxArrayInput_ycount_y extends ResthopperParameter {

	public name: string = "YCount";
	public nickName: string = "Y";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxArrayInput_zcount_z extends ResthopperParameter {

	public name: string = "ZCount";
	public nickName: string = "Z";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxArrayOutput_geometry_g extends ResthopperParameter {

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

class BoxArrayOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public description: string = "Empty Transform parameter"
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
