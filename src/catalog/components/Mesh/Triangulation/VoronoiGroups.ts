import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VoronoiGroups extends ResthopperComponent {

	public guid: string = "9d4854fe-70db-4863-967b-4120d0b6d2e4";
	public name: string = "VoronoiGroups";
	public nickName: string = "VorGroup";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Compute a custom set of nested voronoi diagrams.";
	public isObsolete: boolean = false;
	public isVariable: boolean = true;

	public library: string = "Triangulation Components";

	public input:
	{
		"boundary_b": VoronoiGroupsInput_boundary_b,
		"generation1_g1": VoronoiGroupsInput_generation1_g1,
		"generation2_g2": VoronoiGroupsInput_generation2_g2,
	}

	public output:
	{
		"diagram1_d1": VoronoiGroupsOutput_diagram1_d1,
		"diagram2_d2": VoronoiGroupsOutput_diagram2_d2,
	}

	constructor() {
		super();
		this.input = {
			"boundary_b": new VoronoiGroupsInput_boundary_b(),
			"generation1_g1": new VoronoiGroupsInput_generation1_g1(),
			"generation2_g2": new VoronoiGroupsInput_generation2_g2(),
		}
		this.output = {
			"diagram1_d1": new VoronoiGroupsOutput_diagram1_d1(),
			"diagram2_d2": new VoronoiGroupsOutput_diagram2_d2(),
		}
	}

}

class VoronoiGroupsInput_boundary_b extends ResthopperParameter {

	public name: string = "Boundary";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiGroupsInput_generation1_g1 extends ResthopperParameter {

	public name: string = "Generation1";
	public nickName: string = "G1";
	public isOptional: boolean = true;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiGroupsInput_generation2_g2 extends ResthopperParameter {

	public name: string = "Generation2";
	public nickName: string = "G2";
	public isOptional: boolean = true;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiGroupsOutput_diagram1_d1 extends ResthopperParameter {

	public name: string = "Diagram1";
	public nickName: string = "D1";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VoronoiGroupsOutput_diagram2_d2 extends ResthopperParameter {

	public name: string = "Diagram2";
	public nickName: string = "D2";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
