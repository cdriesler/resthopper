import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurvatureGraph extends ResthopperComponent {

	public guid: string = "7376fe41-74ec-497e-b367-1ffe5072608b";
	public name: string = "CurvatureGraph";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Draws Rhino Curvature Graphs.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Curve_C": CurvatureGraphInput_Curve_C,
		"Density_D": CurvatureGraphInput_Density_D,
		"Scale_S": CurvatureGraphInput_Scale_S,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Curve_C": new CurvatureGraphInput_Curve_C(),
			"Density_D": new CurvatureGraphInput_Density_D(),
			"Scale_S": new CurvatureGraphInput_Scale_S(),
		}
		this.output = {

		}
	}

}

class CurvatureGraphInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurvatureGraphInput_Density_D extends ResthopperParameter {

	public name: string = "Density";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CurvatureGraphInput_Scale_S extends ResthopperParameter {

	public name: string = "Scale";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
