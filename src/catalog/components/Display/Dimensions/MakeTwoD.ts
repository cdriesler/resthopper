import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MakeTwoD extends ResthopperComponent {

	public guid: string = "96e40f6b-ba46-4102-bf15-ebf90471f4a0";
	public name: string = "Make2D";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create a hidden line drawing from geometry";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"geometry_g": MakeTwoDInput_geometry_g,
		"clippingplanes_c": MakeTwoDInput_clippingplanes_c,
		"view_v": MakeTwoDInput_view_v,
		"tangentedges_te": MakeTwoDInput_tangentedges_te,
		"tangentseams_ts": MakeTwoDInput_tangentseams_ts,
	}

	public output:
	{
		"visiblecurves_v": MakeTwoDOutput_visiblecurves_v,
		"visibleindex_vi": MakeTwoDOutput_visibleindex_vi,
		"visibletype_vt": MakeTwoDOutput_visibletype_vt,
		"hiddencurves_h": MakeTwoDOutput_hiddencurves_h,
		"hiddenindex_hi": MakeTwoDOutput_hiddenindex_hi,
		"hiddentype_ht": MakeTwoDOutput_hiddentype_ht,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new MakeTwoDInput_geometry_g(),
			"clippingplanes_c": new MakeTwoDInput_clippingplanes_c(),
			"view_v": new MakeTwoDInput_view_v(),
			"tangentedges_te": new MakeTwoDInput_tangentedges_te(),
			"tangentseams_ts": new MakeTwoDInput_tangentseams_ts(),
		}
		this.output = {
			"visiblecurves_v": new MakeTwoDOutput_visiblecurves_v(),
			"visibleindex_vi": new MakeTwoDOutput_visibleindex_vi(),
			"visibletype_vt": new MakeTwoDOutput_visibletype_vt(),
			"hiddencurves_h": new MakeTwoDOutput_hiddencurves_h(),
			"hiddenindex_hi": new MakeTwoDOutput_hiddenindex_hi(),
			"hiddentype_ht": new MakeTwoDOutput_hiddentype_ht(),
		}
	}

}

class MakeTwoDInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDInput_clippingplanes_c extends ResthopperParameter {

	public name: string = "ClippingPlanes";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDInput_view_v extends ResthopperParameter {

	public name: string = "View";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Projection"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDInput_tangentedges_te extends ResthopperParameter {

	public name: string = "TangentEdges";
	public nickName: string = "Te";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDInput_tangentseams_ts extends ResthopperParameter {

	public name: string = "TangentSeams";
	public nickName: string = "Ts";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDOutput_visiblecurves_v extends ResthopperParameter {

	public name: string = "Visiblecurves";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDOutput_visibleindex_vi extends ResthopperParameter {

	public name: string = "Visibleindex";
	public nickName: string = "Vi";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDOutput_visibletype_vt extends ResthopperParameter {

	public name: string = "Visibletype";
	public nickName: string = "Vt";
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDOutput_hiddencurves_h extends ResthopperParameter {

	public name: string = "Hiddencurves";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDOutput_hiddenindex_hi extends ResthopperParameter {

	public name: string = "Hiddenindex";
	public nickName: string = "Hi";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDOutput_hiddentype_ht extends ResthopperParameter {

	public name: string = "Hiddentype";
	public nickName: string = "Ht";
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
