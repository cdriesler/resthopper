import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Circumcentre extends ResthopperComponent {

	public guid: string = "21d0767c-5340-4087-aa09-398d0e706908";
	public name: string = "Circumcentre";
	public nickName: string = "CCentre";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Generate the triangle circumcentre from perpendicular bisectors.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"pointa_a": CircumcentreInput_pointa_a,
		"pointb_b": CircumcentreInput_pointb_b,
		"pointc_c": CircumcentreInput_pointc_c,
	}

	public output:
	{
		"circumcentre_c": CircumcentreOutput_circumcentre_c,
		"bisectorab_ab": CircumcentreOutput_bisectorab_ab,
		"bisectorbc_bc": CircumcentreOutput_bisectorbc_bc,
		"bisectorca_ca": CircumcentreOutput_bisectorca_ca,
	}

	constructor() {
		super();
		this.input = {
			"pointa_a": new CircumcentreInput_pointa_a(),
			"pointb_b": new CircumcentreInput_pointb_b(),
			"pointc_c": new CircumcentreInput_pointc_c(),
		}
		this.output = {
			"circumcentre_c": new CircumcentreOutput_circumcentre_c(),
			"bisectorab_ab": new CircumcentreOutput_bisectorab_ab(),
			"bisectorbc_bc": new CircumcentreOutput_bisectorbc_bc(),
			"bisectorca_ca": new CircumcentreOutput_bisectorca_ca(),
		}
	}

}

class CircumcentreInput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircumcentreInput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircumcentreInput_pointc_c extends ResthopperParameter {

	public name: string = "PointC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircumcentreOutput_circumcentre_c extends ResthopperParameter {

	public name: string = "Circumcentre";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircumcentreOutput_bisectorab_ab extends ResthopperParameter {

	public name: string = "BisectorAB";
	public nickName: string = "AB";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircumcentreOutput_bisectorbc_bc extends ResthopperParameter {

	public name: string = "BisectorBC";
	public nickName: string = "BC";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircumcentreOutput_bisectorca_ca extends ResthopperParameter {

	public name: string = "BisectorCA";
	public nickName: string = "CA";
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
