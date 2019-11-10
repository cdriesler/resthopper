import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Circumcentre extends ResthopperComponent {

	public guid: string = "21d0767c-5340-4087-aa09-398d0e706908";
	public name: string = "Circumcentre";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Generate the triangle circumcentre from perpendicular bisectors.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"PointA_A": CircumcentreInput_PointA_A,
		"PointB_B": CircumcentreInput_PointB_B,
		"PointC_C": CircumcentreInput_PointC_C,
	}

	public output:
	{
		"Circumcentre_C": CircumcentreOutput_Circumcentre_C,
		"BisectorAB_AB": CircumcentreOutput_BisectorAB_AB,
		"BisectorBC_BC": CircumcentreOutput_BisectorBC_BC,
		"BisectorCA_CA": CircumcentreOutput_BisectorCA_CA,
	}

	constructor() {
		super();
		this.input = {
			"PointA_A": new CircumcentreInput_PointA_A(),
			"PointB_B": new CircumcentreInput_PointB_B(),
			"PointC_C": new CircumcentreInput_PointC_C(),
		}
		this.output = {
			"Circumcentre_C": new CircumcentreOutput_Circumcentre_C(),
			"BisectorAB_AB": new CircumcentreOutput_BisectorAB_AB(),
			"BisectorBC_BC": new CircumcentreOutput_BisectorBC_BC(),
			"BisectorCA_CA": new CircumcentreOutput_BisectorCA_CA(),
		}
	}

}

class CircumcentreInput_PointA_A extends ResthopperParameter {

	public name: string = "PointA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircumcentreInput_PointB_B extends ResthopperParameter {

	public name: string = "PointB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircumcentreInput_PointC_C extends ResthopperParameter {

	public name: string = "PointC";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircumcentreOutput_Circumcentre_C extends ResthopperParameter {

	public name: string = "Circumcentre";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircumcentreOutput_BisectorAB_AB extends ResthopperParameter {

	public name: string = "BisectorAB";
	public nickName: string = "AB";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircumcentreOutput_BisectorBC_BC extends ResthopperParameter {

	public name: string = "BisectorBC";
	public nickName: string = "BC";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CircumcentreOutput_BisectorCA_CA extends ResthopperParameter {

	public name: string = "BisectorCA";
	public nickName: string = "CA";
	public isOptional: boolean = false;
	public typeName: string = "Line;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
