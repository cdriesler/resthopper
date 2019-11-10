import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EdgesfromDirections extends ResthopperComponent {

	public guid: string = "64ff9813-8fe8-4708-ac9f-61b825213e83";
	public name: string = "EdgesfromDirections";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Select brep edges based on edge direction";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Brep_B": EdgesfromDirectionsInput_Brep_B,
		"Directions_D": EdgesfromDirectionsInput_Directions_D,
		"Reflex_R": EdgesfromDirectionsInput_Reflex_R,
		"Angle_A": EdgesfromDirectionsInput_Angle_A,
	}

	public output:
	{
		"Edges_E": EdgesfromDirectionsOutput_Edges_E,
		"Indices_I": EdgesfromDirectionsOutput_Indices_I,
		"Map_M": EdgesfromDirectionsOutput_Map_M,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new EdgesfromDirectionsInput_Brep_B(),
			"Directions_D": new EdgesfromDirectionsInput_Directions_D(),
			"Reflex_R": new EdgesfromDirectionsInput_Reflex_R(),
			"Angle_A": new EdgesfromDirectionsInput_Angle_A(),
		}
		this.output = {
			"Edges_E": new EdgesfromDirectionsOutput_Edges_E(),
			"Indices_I": new EdgesfromDirectionsOutput_Indices_I(),
			"Map_M": new EdgesfromDirectionsOutput_Map_M(),
		}
	}

}

class EdgesfromDirectionsInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromDirectionsInput_Directions_D extends ResthopperParameter {

	public name: string = "Directions";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromDirectionsInput_Reflex_R extends ResthopperParameter {

	public name: string = "Reflex";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromDirectionsInput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromDirectionsOutput_Edges_E extends ResthopperParameter {

	public name: string = "Edges";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromDirectionsOutput_Indices_I extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromDirectionsOutput_Map_M extends ResthopperParameter {

	public name: string = "Map";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
