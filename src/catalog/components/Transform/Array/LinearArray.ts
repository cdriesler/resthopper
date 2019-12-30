import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LinearArray extends ResthopperComponent {

	public guid: string = "e87db220-a0a0-4d67-a405-f97fd14b2d7a";
	public name: string = "Linear Array";
	public nickName: string = "ArrLinear";
	public category: string = "Transform";
	public subCategory: string = "Array";
	public description: string = "Create a linear array of geometry.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": LinearArrayInput_geometry_g,
		"direction_d": LinearArrayInput_direction_d,
		"count_n": LinearArrayInput_count_n,
	}

	public output:
	{
		"geometry_g": LinearArrayOutput_geometry_g,
		"transform_x": LinearArrayOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new LinearArrayInput_geometry_g(),
			"direction_d": new LinearArrayInput_direction_d(),
			"count_n": new LinearArrayInput_count_n(),
		}
		this.output = {
			"geometry_g": new LinearArrayOutput_geometry_g(),
			"transform_x": new LinearArrayOutput_transform_x(),
		}
	}

}

class LinearArrayInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Base geometry"
	public isOptional: boolean = true;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinearArrayInput_direction_d extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "D";
	public description: string = "Linear array direction and interval"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinearArrayInput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public description: string = "Number of elements in array."
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinearArrayOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Arrayed geometry"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinearArrayOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public description: string = "Transformation data"
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
