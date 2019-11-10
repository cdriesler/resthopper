import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EdgesfromPoints extends ResthopperComponent {

	public guid: string = "73269f6a-9645-4638-8d5e-88064dd289bd";
	public name: string = "EdgesfromPoints";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Select brep edges based on point coincidence";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Brep_B": EdgesfromPointsInput_Brep_B,
		"Points_P": EdgesfromPointsInput_Points_P,
		"Valence_V": EdgesfromPointsInput_Valence_V,
		"Tolerance_T": EdgesfromPointsInput_Tolerance_T,
	}

	public output:
	{
		"Edges_E": EdgesfromPointsOutput_Edges_E,
		"Indices_I": EdgesfromPointsOutput_Indices_I,
		"Map_M": EdgesfromPointsOutput_Map_M,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new EdgesfromPointsInput_Brep_B(),
			"Points_P": new EdgesfromPointsInput_Points_P(),
			"Valence_V": new EdgesfromPointsInput_Valence_V(),
			"Tolerance_T": new EdgesfromPointsInput_Tolerance_T(),
		}
		this.output = {
			"Edges_E": new EdgesfromPointsOutput_Edges_E(),
			"Indices_I": new EdgesfromPointsOutput_Indices_I(),
			"Map_M": new EdgesfromPointsOutput_Map_M(),
		}
	}

}

class EdgesfromPointsInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromPointsInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromPointsInput_Valence_V extends ResthopperParameter {

	public name: string = "Valence";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromPointsInput_Tolerance_T extends ResthopperParameter {

	public name: string = "Tolerance";
	public nickName: string = "T";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromPointsOutput_Edges_E extends ResthopperParameter {

	public name: string = "Edges";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromPointsOutput_Indices_I extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromPointsOutput_Map_M extends ResthopperParameter {

	public name: string = "Map";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
