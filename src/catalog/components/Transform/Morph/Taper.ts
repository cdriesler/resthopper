import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Taper extends ResthopperComponent {

	public guid: string = "ad0ee51e-c86f-4668-8de5-b55b850f6001";
	public name: string = "Taper";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Deforms objects toward or away from an axis";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": TaperInput_Geometry_G,
		"Axis_X": TaperInput_Axis_X,
		"Start_R0": TaperInput_Start_R0,
		"End_R1": TaperInput_End_R1,
		"Flat_F": TaperInput_Flat_F,
		"Infinite_I": TaperInput_Infinite_I,
		"Rigid_R": TaperInput_Rigid_R,
	}

	public output:
	{
		"Geometry_G": TaperOutput_Geometry_G,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new TaperInput_Geometry_G(),
			"Axis_X": new TaperInput_Axis_X(),
			"Start_R0": new TaperInput_Start_R0(),
			"End_R1": new TaperInput_End_R1(),
			"Flat_F": new TaperInput_Flat_F(),
			"Infinite_I": new TaperInput_Infinite_I(),
			"Rigid_R": new TaperInput_Rigid_R(),
		}
		this.output = {
			"Geometry_G": new TaperOutput_Geometry_G(),
		}
	}

}

class TaperInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TaperInput_Axis_X extends ResthopperParameter {

	public name: string = "Axis";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TaperInput_Start_R0 extends ResthopperParameter {

	public name: string = "Start";
	public nickName: string = "R0";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TaperInput_End_R1 extends ResthopperParameter {

	public name: string = "End";
	public nickName: string = "R1";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TaperInput_Flat_F extends ResthopperParameter {

	public name: string = "Flat";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TaperInput_Infinite_I extends ResthopperParameter {

	public name: string = "Infinite";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TaperInput_Rigid_R extends ResthopperParameter {

	public name: string = "Rigid";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TaperOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
