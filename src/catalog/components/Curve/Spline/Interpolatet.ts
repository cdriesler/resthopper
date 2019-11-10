import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Interpolatet extends ResthopperComponent {

	public guid: string = "75eb156d-d023-42f9-a85e-2f2456b8bcce";
	public name: string = "Interpolatet";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create an interpolated curve through a set of points with tangents.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Vertices_V": InterpolatetInput_Vertices_V,
		"TangentStart_Ts": InterpolatetInput_TangentStart_Ts,
		"TangentEnd_Te": InterpolatetInput_TangentEnd_Te,
		"KnotStyle_K": InterpolatetInput_KnotStyle_K,
	}

	public output:
	{
		"Curve_C": InterpolatetOutput_Curve_C,
		"Length_L": InterpolatetOutput_Length_L,
		"Domain_D": InterpolatetOutput_Domain_D,
	}

	constructor() {
		super();
		this.input = {
			"Vertices_V": new InterpolatetInput_Vertices_V(),
			"TangentStart_Ts": new InterpolatetInput_TangentStart_Ts(),
			"TangentEnd_Te": new InterpolatetInput_TangentEnd_Te(),
			"KnotStyle_K": new InterpolatetInput_KnotStyle_K(),
		}
		this.output = {
			"Curve_C": new InterpolatetOutput_Curve_C(),
			"Length_L": new InterpolatetOutput_Length_L(),
			"Domain_D": new InterpolatetOutput_Domain_D(),
		}
	}

}

class InterpolatetInput_Vertices_V extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolatetInput_TangentStart_Ts extends ResthopperParameter {

	public name: string = "TangentStart";
	public nickName: string = "Ts";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolatetInput_TangentEnd_Te extends ResthopperParameter {

	public name: string = "TangentEnd";
	public nickName: string = "Te";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolatetInput_KnotStyle_K extends ResthopperParameter {

	public name: string = "KnotStyle";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolatetOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolatetOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolatetOutput_Domain_D extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
