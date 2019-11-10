import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VoronoiThreeD extends ResthopperComponent {

	public guid: string = "ba9bb57a-61cf-4207-a1c4-994e371ba4f9";
	public name: string = "Voronoi3D";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Volumetric voronoi diagram for a collection of points";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"Points_P": VoronoiThreeDInput_Points_P,
		"Box_B": VoronoiThreeDInput_Box_B,
	}

	public output:
	{
		"Cells_C": VoronoiThreeDOutput_Cells_C,
		"Boundary_B": VoronoiThreeDOutput_Boundary_B,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new VoronoiThreeDInput_Points_P(),
			"Box_B": new VoronoiThreeDInput_Box_B(),
		}
		this.output = {
			"Cells_C": new VoronoiThreeDOutput_Cells_C(),
			"Boundary_B": new VoronoiThreeDOutput_Boundary_B(),
		}
	}

}

class VoronoiThreeDInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiThreeDInput_Box_B extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiThreeDOutput_Cells_C extends ResthopperParameter {

	public name: string = "Cells";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiThreeDOutput_Boundary_B extends ResthopperParameter {

	public name: string = "Boundary";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
