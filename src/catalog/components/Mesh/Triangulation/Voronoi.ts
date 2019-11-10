import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Voronoi extends ResthopperComponent {

	public guid: string = "a4011be0-1c91-45bd-8280-17dd3a9f46f1";
	public name: string = "Voronoi";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Planar voronoi diagram for a collection of points";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"points_p": VoronoiInput_points_p,
		"radius_r": VoronoiInput_radius_r,
		"boundary_b": VoronoiInput_boundary_b,
		"plane_pl": VoronoiInput_plane_pl,
	}

	public output:
	{
		"cells_c": VoronoiOutput_cells_c,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new VoronoiInput_points_p(),
			"radius_r": new VoronoiInput_radius_r(),
			"boundary_b": new VoronoiInput_boundary_b(),
			"plane_pl": new VoronoiInput_plane_pl(),
		}
		this.output = {
			"cells_c": new VoronoiOutput_cells_c(),
		}
	}

}

class VoronoiInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiInput_boundary_b extends ResthopperParameter {

	public name: string = "Boundary";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Rectangle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiInput_plane_pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = true;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiOutput_cells_c extends ResthopperParameter {

	public name: string = "Cells";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
