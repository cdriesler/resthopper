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
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": MirrorCurveInput_geometry_g,
		"curve_c": MirrorCurveInput_curve_c,
		"tangent_t": MirrorCurveInput_tangent_t,
	}

	public output:
	{
		"geometry_g": MirrorCurveOutput_geometry_g,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new MirrorCurveInput_geometry_g(),
			"curve_c": new MirrorCurveInput_curve_c(),
			"tangent_t": new MirrorCurveInput_tangent_t(),
		}
		this.output = {
			"geometry_g": new MirrorCurveOutput_geometry_g(),
		}
	}

}

class MirrorCurveInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MirrorCurveInput_curve_c extends ResthopperParameter {

	public name: string = "Curve";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MirrorCurveInput_tangent_t extends ResthopperParameter {

	public name: string = "Tangent";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MirrorCurveOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
