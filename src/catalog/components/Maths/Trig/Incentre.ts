import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Incentre extends ResthopperComponent {

	public guid: string = "c3342ea2-e181-46aa-a9b9-e438ccbfb831";
	public name: string = "Incentre";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Generate the triangle incentre from angle bisectors.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"PointA_A": IncentreInput_PointA_A,
		"PointB_B": IncentreInput_PointB_B,
		"PointC_C": IncentreInput_PointC_C,
	}

	public output:
	{
		"Incentre_I": IncentreOutput_Incentre_I,
		"BisectorA_A": IncentreOutput_BisectorA_A,
		"BisectorB_B": IncentreOutput_BisectorB_B,
		"BisectorC_C": IncentreOutput_BisectorC_C,
	}

	constructor() {
		super();
		this.input = {
			"PointA_A": new IncentreInput_PointA_A(),
			"PointB_B": new IncentreInput_PointB_B(),
			"PointC_C": new IncentreInput_PointC_C(),
		}
		this.output = {
			"Incentre_I": new IncentreOutput_Incentre_I(),
			"BisectorA_A": new IncentreOutput_BisectorA_A(),
			"BisectorB_B": new IncentreOutput_BisectorB_B(),
			"BisectorC_C": new IncentreOutput_BisectorC_C(),
		}
	}

}

class IncentreInput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IncentreInput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IncentreInput_PointC_C extends ResthopperParameter {

	public name: string = "PointC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IncentreOutput_Incentre_I extends ResthopperParameter {

	public name: string = "Incentre";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IncentreOutput_BisectorA_A extends ResthopperParameter {

	public name: string = "BisectorA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IncentreOutput_BisectorB_B extends ResthopperParameter {

	public name: string = "BisectorB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class IncentreOutput_BisectorC_C extends ResthopperParameter {

	public name: string = "BisectorC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
