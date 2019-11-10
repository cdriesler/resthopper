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
		"Point_P": VoronoiCellInput_Point_P,
		"Neighbours_N": VoronoiCellInput_Neighbours_N,
		"Box_B": VoronoiCellInput_Box_B,
	}

	public output:
	{
		"Cell_C": VoronoiCellOutput_Cell_C,
	}

	constructor() {
		super();
		this.input = {
			"Point_P": new VoronoiCellInput_Point_P(),
			"Neighbours_N": new VoronoiCellInput_Neighbours_N(),
			"Box_B": new VoronoiCellInput_Box_B(),
		}
		this.output = {
			"Cell_C": new VoronoiCellOutput_Cell_C(),
		}
	}

}

class VoronoiCellInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiCellInput_Neighbours_N extends ResthopperParameter {

	public name: string = "Neighbours";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiCellInput_Box_B extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiCellOutput_Cell_C extends ResthopperParameter {

	public name: string = "Cell";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
