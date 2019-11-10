import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MirrorCurve extends ResthopperComponent {

	public guid: string = "9c9f8219-ae88-4d29-ba1b-3433ed713639";
	public name: string = "MirrorCurve";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Mirror a shape in a freeform curve.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": MirrorCurveInput_Geometry_G,
		"Curve_C": MirrorCurveInput_Curve_C,
		"Tangent_T": MirrorCurveInput_Tangent_T,
	}

	public output:
	{
		"Geometry_G": MirrorCurveOutput_Geometry_G,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new MirrorCurveInput_Geometry_G(),
			"Curve_C": new MirrorCurveInput_Curve_C(),
			"Tangent_T": new MirrorCurveInput_Tangent_T(),
		}
		this.output = {
			"Geometry_G": new MirrorCurveOutput_Geometry_G(),
		}
	}

}

class MirrorCurveInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MirrorCurveInput_Curve_C extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MirrorCurveInput_Tangent_T extends ResthopperParameter {

	public name: string = "Tangent";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MirrorCurveOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
