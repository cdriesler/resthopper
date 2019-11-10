import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EdgeSurface extends ResthopperComponent {

	public guid: string = "36132830-e2ef-4476-8ea1-6a43922344f0";
	public name: string = "EdgeSurface";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a surface from two, three or four edge curves.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"CurveA_A": EdgeSurfaceInput_CurveA_A,
		"CurveB_B": EdgeSurfaceInput_CurveB_B,
		"CurveC_C": EdgeSurfaceInput_CurveC_C,
		"CurveD_D": EdgeSurfaceInput_CurveD_D,
	}

	public output:
	{
		"Surface_S": EdgeSurfaceOutput_Surface_S,
	}

	constructor() {
		super();
		this.input = {
			"CurveA_A": new EdgeSurfaceInput_CurveA_A(),
			"CurveB_B": new EdgeSurfaceInput_CurveB_B(),
			"CurveC_C": new EdgeSurfaceInput_CurveC_C(),
			"CurveD_D": new EdgeSurfaceInput_CurveD_D(),
		}
		this.output = {
			"Surface_S": new EdgeSurfaceOutput_Surface_S(),
		}
	}

}

class EdgeSurfaceInput_CurveA_A extends ResthopperParameter {

	public name: string = "CurveA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgeSurfaceInput_CurveB_B extends ResthopperParameter {

	public name: string = "CurveB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgeSurfaceInput_CurveC_C extends ResthopperParameter {

	public name: string = "CurveC";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgeSurfaceInput_CurveD_D extends ResthopperParameter {

	public name: string = "CurveD";
	public nickName: string = "D";
	public isOptional: boolean = true;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgeSurfaceOutput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
