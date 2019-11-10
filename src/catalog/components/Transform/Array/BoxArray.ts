import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoxArray extends ResthopperComponent {

	public guid: string = "9f6f954c-ba7b-4428-bf1e-1768cdff666c";
	public name: string = "BoxArray";
	public category: string = "Transform";
	public subCategory: string = "Array";
	public description: string = "Create a box array of geometry.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": BoxArrayInput_Geometry_G,
		"Cell_C": BoxArrayInput_Cell_C,
		"XCount_X": BoxArrayInput_XCount_X,
		"YCount_Y": BoxArrayInput_YCount_Y,
		"ZCount_Z": BoxArrayInput_ZCount_Z,
	}

	public output:
	{
		"Geometry_G": BoxArrayOutput_Geometry_G,
		"Transform_X": BoxArrayOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new BoxArrayInput_Geometry_G(),
			"Cell_C": new BoxArrayInput_Cell_C(),
			"XCount_X": new BoxArrayInput_XCount_X(),
			"YCount_Y": new BoxArrayInput_YCount_Y(),
			"ZCount_Z": new BoxArrayInput_ZCount_Z(),
		}
		this.output = {
			"Geometry_G": new BoxArrayOutput_Geometry_G(),
			"Transform_X": new BoxArrayOutput_Transform_X(),
		}
	}

}

class BoxArrayInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxArrayInput_Cell_C extends ResthopperParameter {

	public name: string = "Cell";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxArrayInput_XCount_X extends ResthopperParameter {

	public name: string = "XCount";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxArrayInput_YCount_Y extends ResthopperParameter {

	public name: string = "YCount";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxArrayInput_ZCount_Z extends ResthopperParameter {

	public name: string = "ZCount";
	public nickName: string = "Z";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxArrayOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxArrayOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
