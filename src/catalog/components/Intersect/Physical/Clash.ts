import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Clash extends ResthopperComponent {

	public guid: string = "4439a51b-8d24-4924-b8e2-f77e7f8f5bec";
	public name: string = "Clash";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Perform clash analysis on a set of shapes.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"FirstSet_A": ClashInput_FirstSet_A,
		"SecondSet_B": ClashInput_SecondSet_B,
		"Distance_D": ClashInput_Distance_D,
		"ResultLimit_L": ClashInput_ResultLimit_L,
	}

	public output:
	{
		"ClashCount_N": ClashOutput_ClashCount_N,
		"ClashPoints_P": ClashOutput_ClashPoints_P,
		"ClashRadii_R": ClashOutput_ClashRadii_R,
		"FirstIndex_i": ClashOutput_FirstIndex_i,
		"Secondindex_j": ClashOutput_Secondindex_j,
	}

	constructor() {
		super();
		this.input = {
			"FirstSet_A": new ClashInput_FirstSet_A(),
			"SecondSet_B": new ClashInput_SecondSet_B(),
			"Distance_D": new ClashInput_Distance_D(),
			"ResultLimit_L": new ClashInput_ResultLimit_L(),
		}
		this.output = {
			"ClashCount_N": new ClashOutput_ClashCount_N(),
			"ClashPoints_P": new ClashOutput_ClashPoints_P(),
			"ClashRadii_R": new ClashOutput_ClashRadii_R(),
			"FirstIndex_i": new ClashOutput_FirstIndex_i(),
			"Secondindex_j": new ClashOutput_Secondindex_j(),
		}
	}

}

class ClashInput_FirstSet_A extends ResthopperParameter {

	public name: string = "FirstSet";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClashInput_SecondSet_B extends ResthopperParameter {

	public name: string = "SecondSet";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClashInput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClashInput_ResultLimit_L extends ResthopperParameter {

	public name: string = "ResultLimit";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClashOutput_ClashCount_N extends ResthopperParameter {

	public name: string = "ClashCount";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClashOutput_ClashPoints_P extends ResthopperParameter {

	public name: string = "ClashPoints";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClashOutput_ClashRadii_R extends ResthopperParameter {

	public name: string = "ClashRadii";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClashOutput_FirstIndex_i extends ResthopperParameter {

	public name: string = "FirstIndex";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClashOutput_Secondindex_j extends ResthopperParameter {

	public name: string = "Secondindex";
	public nickName: string = "j";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
