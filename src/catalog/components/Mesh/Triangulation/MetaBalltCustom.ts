import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MetaBalltCustom extends ResthopperComponent {

	public guid: string = "c4373505-a4cf-4992-8db1-fd6e6bb5850d";
	public name: string = "MetaBalltCustom";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "2D Metaball isosurface by threshold and custom charge values";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"points_p": MetaBalltCustomInput_points_p,
		"charge_c": MetaBalltCustomInput_charge_c,
		"plane_pl": MetaBalltCustomInput_plane_pl,
		"threshold_t": MetaBalltCustomInput_threshold_t,
		"accuracy_a": MetaBalltCustomInput_accuracy_a,
	}

	public output:
	{
		"isocurve_i": MetaBalltCustomOutput_isocurve_i,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new MetaBalltCustomInput_points_p(),
			"charge_c": new MetaBalltCustomInput_charge_c(),
			"plane_pl": new MetaBalltCustomInput_plane_pl(),
			"threshold_t": new MetaBalltCustomInput_threshold_t(),
			"accuracy_a": new MetaBalltCustomInput_accuracy_a(),
		}
		this.output = {
			"isocurve_i": new MetaBalltCustomOutput_isocurve_i(),
		}
	}

}

class MetaBalltCustomInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBalltCustomInput_charge_c extends ResthopperParameter {

	public name: string = "Charge";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBalltCustomInput_plane_pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBalltCustomInput_threshold_t extends ResthopperParameter {

	public name: string = "Threshold";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBalltCustomInput_accuracy_a extends ResthopperParameter {

	public name: string = "Accuracy";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBalltCustomOutput_isocurve_i extends ResthopperParameter {

	public name: string = "Isocurve";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
