import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Stretch extends ResthopperComponent {

	public guid: string = "2a27f87c-61c5-47c2-a0b7-7863f31a3594";
	public name: string = "Stretch";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Deforms objects by stretching them along a finite axis.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": StretchInput_Geometry_G,
		"Axis_X": StretchInput_Axis_X,
		"Length_L": StretchInput_Length_L,
		"Rigid_R": StretchInput_Rigid_R,
	}

	public output:
	{
		"Geometry_G": StretchOutput_Geometry_G,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new StretchInput_Geometry_G(),
			"Axis_X": new StretchInput_Axis_X(),
			"Length_L": new StretchInput_Length_L(),
			"Rigid_R": new StretchInput_Rigid_R(),
		}
		this.output = {
			"Geometry_G": new StretchOutput_Geometry_G(),
		}
	}

}

class StretchInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StretchInput_Axis_X extends ResthopperParameter {

	public name: string = "Axis";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StretchInput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StretchInput_Rigid_R extends ResthopperParameter {

	public name: string = "Rigid";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StretchOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
