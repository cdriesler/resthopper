import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Incentre extends ResthopperComponent {

	public guid: string = "c3342ea2-e181-46aa-a9b9-e438ccbfb831";
	public name: string = "Incentre";
	public nickName: string = "ICentre";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Generate the triangle incentre from angle bisectors.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"pointa_a": IncentreInput_pointa_a,
		"pointb_b": IncentreInput_pointb_b,
		"pointc_c": IncentreInput_pointc_c,
	}

	public output:
	{
		"incentre_i": IncentreOutput_incentre_i,
		"bisectora_a": IncentreOutput_bisectora_a,
		"bisectorb_b": IncentreOutput_bisectorb_b,
		"bisectorc_c": IncentreOutput_bisectorc_c,
	}

	constructor() {
		super();
		this.input = {
			"pointa_a": new IncentreInput_pointa_a(),
			"pointb_b": new IncentreInput_pointb_b(),
			"pointc_c": new IncentreInput_pointc_c(),
		}
		this.output = {
			"incentre_i": new IncentreOutput_incentre_i(),
			"bisectora_a": new IncentreOutput_bisectora_a(),
			"bisectorb_b": new IncentreOutput_bisectorb_b(),
			"bisectorc_c": new IncentreOutput_bisectorc_c(),
		}
	}

}

class IncentreInput_pointa_a extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IncentreInput_pointb_b extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IncentreInput_pointc_c extends ResthopperParameter {

	public name: string = "PointC";
	public nickName: string = "C";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IncentreOutput_incentre_i extends ResthopperParameter {

	public name: string = "Incentre";
	public nickName: string = "I";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IncentreOutput_bisectora_a extends ResthopperParameter {

	public name: string = "BisectorA";
	public nickName: string = "A";
	public description: string = "Empty Line parameter"
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IncentreOutput_bisectorb_b extends ResthopperParameter {

	public name: string = "BisectorB";
	public nickName: string = "B";
	public description: string = "Empty Line parameter"
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IncentreOutput_bisectorc_c extends ResthopperParameter {

	public name: string = "BisectorC";
	public nickName: string = "C";
	public description: string = "Empty Line parameter"
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
