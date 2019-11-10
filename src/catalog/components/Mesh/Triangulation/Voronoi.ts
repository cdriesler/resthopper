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
		"Points_P": VoronoiInput_Points_P,
		"Radius_R": VoronoiInput_Radius_R,
		"Boundary_B": VoronoiInput_Boundary_B,
		"Plane_Pl": VoronoiInput_Plane_Pl,
	}

	public output:
	{
		"Cells_C": VoronoiOutput_Cells_C,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new VoronoiInput_Points_P(),
			"Radius_R": new VoronoiInput_Radius_R(),
			"Boundary_B": new VoronoiInput_Boundary_B(),
			"Plane_Pl": new VoronoiInput_Plane_Pl(),
		}
		this.output = {
			"Cells_C": new VoronoiOutput_Cells_C(),
		}
	}

}

class VoronoiInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiInput_Boundary_B extends ResthopperParameter {

	public name: string = "Boundary";
	public nickName: string = "B";
	public isOptional: boolean = true;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiInput_Plane_Pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = true;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiOutput_Cells_C extends ResthopperParameter {

	public name: string = "Cells";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
