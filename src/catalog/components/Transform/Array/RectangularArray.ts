import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RectangularArray extends ResthopperComponent {

	public guid: string = "e521f7c8-92f4-481c-888b-eea109e3d6e9";
	public name: string = "RectangularArray";
	public category: string = "Transform";
	public subCategory: string = "Array";
	public description: string = "Create a rectangular array of geometry.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": RectangularArrayInput_Geometry_G,
		"Cell_C": RectangularArrayInput_Cell_C,
		"XCount_X": RectangularArrayInput_XCount_X,
		"YCount_Y": RectangularArrayInput_YCount_Y,
	}

	public output:
	{
		"Geometry_G": RectangularArrayOutput_Geometry_G,
		"Transform_X": RectangularArrayOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new RectangularArrayInput_Geometry_G(),
			"Cell_C": new RectangularArrayInput_Cell_C(),
			"XCount_X": new RectangularArrayInput_XCount_X(),
			"YCount_Y": new RectangularArrayInput_YCount_Y(),
		}
		this.output = {
			"Geometry_G": new RectangularArrayOutput_Geometry_G(),
			"Transform_X": new RectangularArrayOutput_Transform_X(),
		}
	}

}

class RectangularArrayInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularArrayInput_Cell_C extends ResthopperParameter {

	public name: string = "Cell";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularArrayInput_XCount_X extends ResthopperParameter {

	public name: string = "XCount";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularArrayInput_YCount_Y extends ResthopperParameter {

	public name: string = "YCount";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularArrayOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RectangularArrayOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
