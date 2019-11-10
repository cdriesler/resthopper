import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Orient extends ResthopperComponent {

	public guid: string = "378d0690-9da0-4dd1-ab16-1d15246e7c22";
	public name: string = "Orient";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Orient an object. Orientation is sometimes called a 'ChangeBasis tranformation'. It allows for remapping of geometry from one axis-system to another.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": OrientInput_Geometry_G,
		"Source_A": OrientInput_Source_A,
		"Target_B": OrientInput_Target_B,
	}

	public output:
	{
		"Geometry_G": OrientOutput_Geometry_G,
		"Transform_X": OrientOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new OrientInput_Geometry_G(),
			"Source_A": new OrientInput_Source_A(),
			"Target_B": new OrientInput_Target_B(),
		}
		this.output = {
			"Geometry_G": new OrientOutput_Geometry_G(),
			"Transform_X": new OrientOutput_Transform_X(),
		}
	}

}

class OrientInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrientInput_Source_A extends ResthopperParameter {

	public name: string = "Source";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrientInput_Target_B extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrientOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class OrientOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
