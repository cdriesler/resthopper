import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MultipleCurves extends ResthopperComponent {

	public guid: string = "931e6030-ccb3-4a7b-a89a-99dcce8770cd";
	public name: string = "MultipleCurves";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Solve intersection events for multiple curves.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Curves_C": MultipleCurvesInput_Curves_C,
	}

	public output:
	{
		"Points_P": MultipleCurvesOutput_Points_P,
		"IndexA_iA": MultipleCurvesOutput_IndexA_iA,
		"IndexB_iB": MultipleCurvesOutput_IndexB_iB,
		"ParamA_tA": MultipleCurvesOutput_ParamA_tA,
		"ParamB_tB": MultipleCurvesOutput_ParamB_tB,
	}

	constructor() {
		super();
		this.input = {
			"Curves_C": new MultipleCurvesInput_Curves_C(),
		}
		this.output = {
			"Points_P": new MultipleCurvesOutput_Points_P(),
			"IndexA_iA": new MultipleCurvesOutput_IndexA_iA(),
			"IndexB_iB": new MultipleCurvesOutput_IndexB_iB(),
			"ParamA_tA": new MultipleCurvesOutput_ParamA_tA(),
			"ParamB_tB": new MultipleCurvesOutput_ParamB_tB(),
		}
	}

}

class MultipleCurvesInput_Curves_C extends ResthopperParameter {

	public name: string = "Curves";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MultipleCurvesOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MultipleCurvesOutput_IndexA_iA extends ResthopperParameter {

	public name: string = "IndexA";
	public nickName: string = "iA";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MultipleCurvesOutput_IndexB_iB extends ResthopperParameter {

	public name: string = "IndexB";
	public nickName: string = "iB";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MultipleCurvesOutput_ParamA_tA extends ResthopperParameter {

	public name: string = "ParamA";
	public nickName: string = "tA";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MultipleCurvesOutput_ParamB_tB extends ResthopperParameter {

	public name: string = "ParamB";
	public nickName: string = "tB";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
