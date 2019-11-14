import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MultipleCurves extends ResthopperComponent {

	public guid: string = "931e6030-ccb3-4a7b-a89a-99dcce8770cd";
	public name: string = "MultipleCurves";
	public nickName: string = "MCX";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Solve intersection events for multiple curves.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"curves_c": MultipleCurvesInput_curves_c,
	}

	public output:
	{
		"points_p": MultipleCurvesOutput_points_p,
		"indexa_ia": MultipleCurvesOutput_indexa_ia,
		"indexb_ib": MultipleCurvesOutput_indexb_ib,
		"parama_ta": MultipleCurvesOutput_parama_ta,
		"paramb_tb": MultipleCurvesOutput_paramb_tb,
	}

	constructor() {
		super();
		this.input = {
			"curves_c": new MultipleCurvesInput_curves_c(),
		}
		this.output = {
			"points_p": new MultipleCurvesOutput_points_p(),
			"indexa_ia": new MultipleCurvesOutput_indexa_ia(),
			"indexb_ib": new MultipleCurvesOutput_indexb_ib(),
			"parama_ta": new MultipleCurvesOutput_parama_ta(),
			"paramb_tb": new MultipleCurvesOutput_paramb_tb(),
		}
	}

}

class MultipleCurvesInput_curves_c extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MultipleCurvesOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MultipleCurvesOutput_indexa_ia extends ResthopperParameter {

	public name: string = "IndexA";
	public nickName: string = "iA";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MultipleCurvesOutput_indexb_ib extends ResthopperParameter {

	public name: string = "IndexB";
	public nickName: string = "iB";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MultipleCurvesOutput_parama_ta extends ResthopperParameter {

	public name: string = "ParamA";
	public nickName: string = "tA";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MultipleCurvesOutput_paramb_tb extends ResthopperParameter {

	public name: string = "ParamB";
	public nickName: string = "tB";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
