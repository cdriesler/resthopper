import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurvatureGraph extends ResthopperComponent {

	public guid: string = "7376fe41-74ec-497e-b367-1ffe5072608b";
	public name: string = "CurvatureGraph";
	public nickName: string = "CrvGraph";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Draws Rhino Curvature Graphs.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"curve_c": CurvatureGraphInput_curve_c,
		"density_d": CurvatureGraphInput_density_d,
		"scale_s": CurvatureGraphInput_scale_s,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"curve_c": new CurvatureGraphInput_curve_c(),
			"density_d": new CurvatureGraphInput_density_d(),
			"scale_s": new CurvatureGraphInput_scale_s(),
		}
		this.output = {

		}
	}

}

class CurvatureGraphInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurvatureGraphInput_density_d extends ResthopperParameter {

	public name: string = "Density";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurvatureGraphInput_scale_s extends ResthopperParameter {

	public name: string = "Scale";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
