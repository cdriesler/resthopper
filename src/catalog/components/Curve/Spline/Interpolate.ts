import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Interpolate extends ResthopperComponent {

	public guid: string = "2b2a4145-3dff-41d4-a8de-1ea9d29eef33";
	public name: string = "Interpolate";
	public category: string = "Curve";
	public subCategory: string = "Spline";
	public description: string = "Create an interpolated curve through a set of points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Vertices_V": InterpolateInput_Vertices_V,
		"Degree_D": InterpolateInput_Degree_D,
		"Periodic_P": InterpolateInput_Periodic_P,
		"KnotStyle_K": InterpolateInput_KnotStyle_K,
	}

	public output:
	{
		"Curve_C": InterpolateOutput_Curve_C,
		"Length_L": InterpolateOutput_Length_L,
		"Domain_D": InterpolateOutput_Domain_D,
	}

	constructor() {
		super();
		this.input = {
			"Vertices_V": new InterpolateInput_Vertices_V(),
			"Degree_D": new InterpolateInput_Degree_D(),
			"Periodic_P": new InterpolateInput_Periodic_P(),
			"KnotStyle_K": new InterpolateInput_KnotStyle_K(),
		}
		this.output = {
			"Curve_C": new InterpolateOutput_Curve_C(),
			"Length_L": new InterpolateOutput_Length_L(),
			"Domain_D": new InterpolateOutput_Domain_D(),
		}
	}

}

class InterpolateInput_Vertices_V extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolateInput_Degree_D extends ResthopperParameter {

	public name: string = "Degree";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolateInput_Periodic_P extends ResthopperParameter {

	public name: string = "Periodic";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolateInput_KnotStyle_K extends ResthopperParameter {

	public name: string = "KnotStyle";
	public nickName: string = "K";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolateOutput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolateOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InterpolateOutput_Domain_D extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
