import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MetaBall extends ResthopperComponent {

	public guid: string = "dc934310-67eb-4d1d-8607-7cc62a501dd9";
	public name: string = "MetaBall";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "2D Metaball isocurve through point";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"points_p": MetaBallInput_points_p,
		"plane_pl": MetaBallInput_plane_pl,
		"point_x": MetaBallInput_point_x,
		"accuracy_a": MetaBallInput_accuracy_a,
	}

	public output:
	{
		"isocurve_i": MetaBallOutput_isocurve_i,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new MetaBallInput_points_p(),
			"plane_pl": new MetaBallInput_plane_pl(),
			"point_x": new MetaBallInput_point_x(),
			"accuracy_a": new MetaBallInput_accuracy_a(),
		}
		this.output = {
			"isocurve_i": new MetaBallOutput_isocurve_i(),
		}
	}

}

class MetaBallInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBallInput_plane_pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBallInput_point_x extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBallInput_accuracy_a extends ResthopperParameter {

	public name: string = "Accuracy";
	public nickName: string = "A";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MetaBallOutput_isocurve_i extends ResthopperParameter {

	public name: string = "Isocurve";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
