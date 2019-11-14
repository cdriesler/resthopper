import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VoronoiThreeD extends ResthopperComponent {

	public guid: string = "ba9bb57a-61cf-4207-a1c4-994e371ba4f9";
	public name: string = "Voronoi3D";
	public nickName: string = "Voronoi";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Volumetric voronoi diagram for a collection of points";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"points_p": VoronoiThreeDInput_points_p,
		"box_b": VoronoiThreeDInput_box_b,
	}

	public output:
	{
		"cells_c": VoronoiThreeDOutput_cells_c,
		"boundary_b": VoronoiThreeDOutput_boundary_b,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new VoronoiThreeDInput_points_p(),
			"box_b": new VoronoiThreeDInput_box_b(),
		}
		this.output = {
			"cells_c": new VoronoiThreeDOutput_cells_c(),
			"boundary_b": new VoronoiThreeDOutput_boundary_b(),
		}
	}

}

class VoronoiThreeDInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiThreeDInput_box_b extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiThreeDOutput_cells_c extends ResthopperParameter {

	public name: string = "Cells";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiThreeDOutput_boundary_b extends ResthopperParameter {

	public name: string = "Boundary";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
