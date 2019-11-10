import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConvexHull extends ResthopperComponent {

	public guid: string = "9d0c5284-ea24-4f9f-a183-ef57fc48b5b8";
	public name: string = "ConvexHull";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Compute the planar, convex hull for a collection of points";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"points_p": ConvexHullInput_points_p,
		"plane_pl": ConvexHullInput_plane_pl,
	}

	public output:
	{
		"hull_h": ConvexHullOutput_hull_h,
		"hullz_hz": ConvexHullOutput_hullz_hz,
		"indices_i": ConvexHullOutput_indices_i,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new ConvexHullInput_points_p(),
			"plane_pl": new ConvexHullInput_plane_pl(),
		}
		this.output = {
			"hull_h": new ConvexHullOutput_hull_h(),
			"hullz_hz": new ConvexHullOutput_hullz_hz(),
			"indices_i": new ConvexHullOutput_indices_i(),
		}
	}

}

class ConvexHullInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConvexHullInput_plane_pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = true;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConvexHullOutput_hull_h extends ResthopperParameter {

	public name: string = "Hull";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConvexHullOutput_hullz_hz extends ResthopperParameter {

	public name: string = "Hullz";
	public nickName: string = "Hz";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConvexHullOutput_indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
