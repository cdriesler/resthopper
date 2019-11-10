import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VoronoiGroups extends ResthopperComponent {

	public guid: string = "9d4854fe-70db-4863-967b-4120d0b6d2e4";
	public name: string = "VoronoiGroups";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Compute a custom set of nested voronoi diagrams.";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"Boundary_B": VoronoiGroupsInput_Boundary_B,
		"Generation1_G1": VoronoiGroupsInput_Generation1_G1,
		"Generation2_G2": VoronoiGroupsInput_Generation2_G2,
	}

	public output:
	{
		"Diagram1_D1": VoronoiGroupsOutput_Diagram1_D1,
		"Diagram2_D2": VoronoiGroupsOutput_Diagram2_D2,
	}

	constructor() {
		super();
		this.input = {
			"Boundary_B": new VoronoiGroupsInput_Boundary_B(),
			"Generation1_G1": new VoronoiGroupsInput_Generation1_G1(),
			"Generation2_G2": new VoronoiGroupsInput_Generation2_G2(),
		}
		this.output = {
			"Diagram1_D1": new VoronoiGroupsOutput_Diagram1_D1(),
			"Diagram2_D2": new VoronoiGroupsOutput_Diagram2_D2(),
		}
	}

}

class VoronoiGroupsInput_Boundary_B extends ResthopperParameter {

	public name: string = "Boundary";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiGroupsInput_Generation1_G1 extends ResthopperParameter {

	public name: string = "Generation1";
	public nickName: string = "G1";
	public isOptional: boolean = true;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiGroupsInput_Generation2_G2 extends ResthopperParameter {

	public name: string = "Generation2";
	public nickName: string = "G2";
	public isOptional: boolean = true;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiGroupsOutput_Diagram1_D1 extends ResthopperParameter {

	public name: string = "Diagram1";
	public nickName: string = "D1";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiGroupsOutput_Diagram2_D2 extends ResthopperParameter {

	public name: string = "Diagram2";
	public nickName: string = "D2";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
