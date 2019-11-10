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
		"Geometry_G": MakeTwoDInput_Geometry_G,
		"ClippingPlanes_C": MakeTwoDInput_ClippingPlanes_C,
		"View_V": MakeTwoDInput_View_V,
		"TangentEdges_Te": MakeTwoDInput_TangentEdges_Te,
		"TangentSeams_Ts": MakeTwoDInput_TangentSeams_Ts,
	}

	public output:
	{
		"Visiblecurves_V": MakeTwoDOutput_Visiblecurves_V,
		"Visibleindex_Vi": MakeTwoDOutput_Visibleindex_Vi,
		"Visibletype_Vt": MakeTwoDOutput_Visibletype_Vt,
		"Hiddencurves_H": MakeTwoDOutput_Hiddencurves_H,
		"Hiddenindex_Hi": MakeTwoDOutput_Hiddenindex_Hi,
		"Hiddentype_Ht": MakeTwoDOutput_Hiddentype_Ht,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new MakeTwoDInput_Geometry_G(),
			"ClippingPlanes_C": new MakeTwoDInput_ClippingPlanes_C(),
			"View_V": new MakeTwoDInput_View_V(),
			"TangentEdges_Te": new MakeTwoDInput_TangentEdges_Te(),
			"TangentSeams_Ts": new MakeTwoDInput_TangentSeams_Ts(),
		}
		this.output = {
			"Visiblecurves_V": new MakeTwoDOutput_Visiblecurves_V(),
			"Visibleindex_Vi": new MakeTwoDOutput_Visibleindex_Vi(),
			"Visibletype_Vt": new MakeTwoDOutput_Visibletype_Vt(),
			"Hiddencurves_H": new MakeTwoDOutput_Hiddencurves_H(),
			"Hiddenindex_Hi": new MakeTwoDOutput_Hiddenindex_Hi(),
			"Hiddentype_Ht": new MakeTwoDOutput_Hiddentype_Ht(),
		}
	}

}

class MakeTwoDInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDInput_ClippingPlanes_C extends ResthopperParameter {

	public name: string = "ClippingPlanes";
	public nickName: string = "C";
	public isOptional: boolean = true;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDInput_View_V extends ResthopperParameter {

	public name: string = "View";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Projection;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDInput_TangentEdges_Te extends ResthopperParameter {

	public name: string = "TangentEdges";
	public nickName: string = "Te";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDInput_TangentSeams_Ts extends ResthopperParameter {

	public name: string = "TangentSeams";
	public nickName: string = "Ts";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDOutput_Visiblecurves_V extends ResthopperParameter {

	public name: string = "Visiblecurves";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDOutput_Visibleindex_Vi extends ResthopperParameter {

	public name: string = "Visibleindex";
	public nickName: string = "Vi";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDOutput_Visibletype_Vt extends ResthopperParameter {

	public name: string = "Visibletype";
	public nickName: string = "Vt";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDOutput_Hiddencurves_H extends ResthopperParameter {

	public name: string = "Hiddencurves";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDOutput_Hiddenindex_Hi extends ResthopperParameter {

	public name: string = "Hiddenindex";
	public nickName: string = "Hi";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MakeTwoDOutput_Hiddentype_Ht extends ResthopperParameter {

	public name: string = "Hiddentype";
	public nickName: string = "Ht";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
