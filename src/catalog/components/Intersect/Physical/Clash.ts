import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Clash extends ResthopperComponent {

	public guid: string = "4439a51b-8d24-4924-b8e2-f77e7f8f5bec";
	public name: string = "Clash";
	public nickName: string = "Clash";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Perform clash analysis on a set of shapes.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"firstset_a": ClashInput_firstset_a,
		"secondset_b": ClashInput_secondset_b,
		"distance_d": ClashInput_distance_d,
		"resultlimit_l": ClashInput_resultlimit_l,
	}

	public output:
	{
		"clashcount_n": ClashOutput_clashcount_n,
		"clashpoints_p": ClashOutput_clashpoints_p,
		"clashradii_r": ClashOutput_clashradii_r,
		"firstindex_i": ClashOutput_firstindex_i,
		"secondindex_j": ClashOutput_secondindex_j,
	}

	constructor() {
		super();
		this.input = {
			"firstset_a": new ClashInput_firstset_a(),
			"secondset_b": new ClashInput_secondset_b(),
			"distance_d": new ClashInput_distance_d(),
			"resultlimit_l": new ClashInput_resultlimit_l(),
		}
		this.output = {
			"clashcount_n": new ClashOutput_clashcount_n(),
			"clashpoints_p": new ClashOutput_clashpoints_p(),
			"clashradii_r": new ClashOutput_clashradii_r(),
			"firstindex_i": new ClashOutput_firstindex_i(),
			"secondindex_j": new ClashOutput_secondindex_j(),
		}
	}

}

class ClashInput_firstset_a extends ResthopperParameter {

	public name: string = "FirstSet";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClashInput_secondset_b extends ResthopperParameter {

	public name: string = "SecondSet";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClashInput_distance_d extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClashInput_resultlimit_l extends ResthopperParameter {

	public name: string = "ResultLimit";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClashOutput_clashcount_n extends ResthopperParameter {

	public name: string = "ClashCount";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClashOutput_clashpoints_p extends ResthopperParameter {

	public name: string = "ClashPoints";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClashOutput_clashradii_r extends ResthopperParameter {

	public name: string = "ClashRadii";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClashOutput_firstindex_i extends ResthopperParameter {

	public name: string = "FirstIndex";
	public nickName: string = "i";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ClashOutput_secondindex_j extends ResthopperParameter {

	public name: string = "Secondindex";
	public nickName: string = "j";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
