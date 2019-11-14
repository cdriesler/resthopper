import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RectangularArray extends ResthopperComponent {

	public guid: string = "e521f7c8-92f4-481c-888b-eea109e3d6e9";
	public name: string = "RectangularArray";
	public nickName: string = "ArrRec";
	public category: string = "Transform";
	public subCategory: string = "Array";
	public description: string = "Create a rectangular array of geometry.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": RectangularArrayInput_geometry_g,
		"cell_c": RectangularArrayInput_cell_c,
		"xcount_x": RectangularArrayInput_xcount_x,
		"ycount_y": RectangularArrayInput_ycount_y,
	}

	public output:
	{
		"geometry_g": RectangularArrayOutput_geometry_g,
		"transform_x": RectangularArrayOutput_transform_x,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new RectangularArrayInput_geometry_g(),
			"cell_c": new RectangularArrayInput_cell_c(),
			"xcount_x": new RectangularArrayInput_xcount_x(),
			"ycount_y": new RectangularArrayInput_ycount_y(),
		}
		this.output = {
			"geometry_g": new RectangularArrayOutput_geometry_g(),
			"transform_x": new RectangularArrayOutput_transform_x(),
		}
	}

}

class RectangularArrayInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularArrayInput_cell_c extends ResthopperParameter {

	public name: string = "Cell";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularArrayInput_xcount_x extends ResthopperParameter {

	public name: string = "XCount";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularArrayInput_ycount_y extends ResthopperParameter {

	public name: string = "YCount";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularArrayOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularArrayOutput_transform_x extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
