import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MetaBallt extends ResthopperComponent {

	public guid: string = "c48cf4d4-432c-41b6-b77a-77650479a31f";
	public name: string = "MetaBall(t)";
	public nickName: string = "MetaBallt";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "2D Metaball isosurface by threshold";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"points_p": MetaBalltInput_points_p,
		"plane_pl": MetaBalltInput_plane_pl,
		"threshold_t": MetaBalltInput_threshold_t,
		"accuracy_a": MetaBalltInput_accuracy_a,
	}

	public output:
	{
		"isocurve_i": MetaBalltOutput_isocurve_i,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new MetaBalltInput_points_p(),
			"plane_pl": new MetaBalltInput_plane_pl(),
			"threshold_t": new MetaBalltInput_threshold_t(),
			"accuracy_a": new MetaBalltInput_accuracy_a(),
		}
		this.output = {
			"isocurve_i": new MetaBalltOutput_isocurve_i(),
		}
	}

}

class MetaBalltInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBalltInput_plane_pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public description: string = "Empty Plane parameter"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBalltInput_threshold_t extends ResthopperParameter {

	public name: string = "Threshold";
	public nickName: string = "T";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBalltInput_accuracy_a extends ResthopperParameter {

	public name: string = "Accuracy";
	public nickName: string = "A";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBalltOutput_isocurve_i extends ResthopperParameter {

	public name: string = "Isocurve";
	public nickName: string = "I";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
