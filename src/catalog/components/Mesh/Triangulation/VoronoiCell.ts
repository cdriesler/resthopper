import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VoronoiCell extends ResthopperComponent {

	public guid: string = "7b181be1-30e7-4a97-915a-1b461741aef8";
	public name: string = "VoronoiCell";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Compute a single 3D Voronoi cell";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"point_p": VoronoiCellInput_point_p,
		"neighbours_n": VoronoiCellInput_neighbours_n,
		"box_b": VoronoiCellInput_box_b,
	}

	public output:
	{
		"cell_c": VoronoiCellOutput_cell_c,
	}

	constructor() {
		super();
		this.input = {
			"point_p": new VoronoiCellInput_point_p(),
			"neighbours_n": new VoronoiCellInput_neighbours_n(),
			"box_b": new VoronoiCellInput_box_b(),
		}
		this.output = {
			"cell_c": new VoronoiCellOutput_cell_c(),
		}
	}

}

class VoronoiCellInput_point_p extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiCellInput_neighbours_n extends ResthopperParameter {

	public name: string = "Neighbours";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiCellInput_box_b extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiCellOutput_cell_c extends ResthopperParameter {

	public name: string = "Cell";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
