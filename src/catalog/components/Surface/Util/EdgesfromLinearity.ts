import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EdgesfromLinearity extends ResthopperComponent {

	public guid: string = "e4ff8101-73c9-4802-8c5d-704d8721b909";
	public name: string = "EdgesfromLinearity";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Select brep edges based on linearity";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Brep_B": EdgesfromLinearityInput_Brep_B,
		"Maximum_L": EdgesfromLinearityInput_Maximum_L,
	}

	public output:
	{
		"Edges_E": EdgesfromLinearityOutput_Edges_E,
		"Indices_I": EdgesfromLinearityOutput_Indices_I,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new EdgesfromLinearityInput_Brep_B(),
			"Maximum_L": new EdgesfromLinearityInput_Maximum_L(),
		}
		this.output = {
			"Edges_E": new EdgesfromLinearityOutput_Edges_E(),
			"Indices_I": new EdgesfromLinearityOutput_Indices_I(),
		}
	}

}

class EdgesfromLinearityInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromLinearityInput_Maximum_L extends ResthopperParameter {

	public name: string = "Maximum";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromLinearityOutput_Edges_E extends ResthopperParameter {

	public name: string = "Edges";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromLinearityOutput_Indices_I extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
