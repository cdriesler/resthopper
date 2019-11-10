import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RebuildCurve extends ResthopperComponent {

	public guid: string = "9333c5b3-11f9-423c-bbb5-7e5156430219";
	public name: string = "RebuildCurve";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Rebuild a curve with a specific number of control-points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curve_C": RebuildCurveInput_Curve_C,
		"Degree_D": RebuildCurveInput_Degree_D,
		"Count_N": RebuildCurveInput_Count_N,
		"Tangents_T": RebuildCurveInput_Tangents_T,
	}

	public output:
	{
		"Curve_C": RebuildCurveOutput_Curve_C,
	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new RebuildCurveInput_Curve_C(),
			"Degree_D": new RebuildCurveInput_Degree_D(),
			"Count_N": new RebuildCurveInput_Count_N(),
			"Tangents_T": new RebuildCurveInput_Tangents_T(),
		}
		this.output = {
			"Curve_C": new RebuildCurveOutput_Curve_C(),
		}
	}

}

class RebuildCurveInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RebuildCurveInput_Degree_D extends ResthopperParameter {

	public name: string = "Degree";
	public nickName: string = "D";
	public isOptional: boolean = true;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RebuildCurveInput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RebuildCurveInput_Tangents_T extends ResthopperParameter {

	public name: string = "Tangents";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RebuildCurveOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
