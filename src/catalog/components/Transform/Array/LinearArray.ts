import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LinearArray extends ResthopperComponent {

	public guid: string = "e87db220-a0a0-4d67-a405-f97fd14b2d7a";
	public name: string = "LinearArray";
	public category: string = "Transform";
	public subCategory: string = "Array";
	public description: string = "Create a linear array of geometry.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": LinearArrayInput_Geometry_G,
		"Direction_D": LinearArrayInput_Direction_D,
		"Count_N": LinearArrayInput_Count_N,
	}

	public output:
	{
		"Geometry_G": LinearArrayOutput_Geometry_G,
		"Transform_X": LinearArrayOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new LinearArrayInput_Geometry_G(),
			"Direction_D": new LinearArrayInput_Direction_D(),
			"Count_N": new LinearArrayInput_Count_N(),
		}
		this.output = {
			"Geometry_G": new LinearArrayOutput_Geometry_G(),
			"Transform_X": new LinearArrayOutput_Transform_X(),
		}
	}

}

class LinearArrayInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinearArrayInput_Direction_D extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinearArrayInput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinearArrayOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class LinearArrayOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
