import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EdgesfromLength extends ResthopperComponent {

	public guid: string = "ff187e6a-84bc-4bb9-a572-b39006a0576d";
	public name: string = "EdgesfromLength";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Select brep edges based on length";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Brep_B": EdgesfromLengthInput_Brep_B,
		"Maximum_L": EdgesfromLengthInput_Maximum_L,
	}

	public output:
	{
		"Edges_E": EdgesfromLengthOutput_Edges_E,
		"Indices_I": EdgesfromLengthOutput_Indices_I,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new EdgesfromLengthInput_Brep_B(),
			"Maximum_L": new EdgesfromLengthInput_Maximum_L(),
		}
		this.output = {
			"Edges_E": new EdgesfromLengthOutput_Edges_E(),
			"Indices_I": new EdgesfromLengthOutput_Indices_I(),
		}
	}

}

class EdgesfromLengthInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromLengthInput_Maximum_L extends ResthopperParameter {

	public name: string = "Maximum";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromLengthOutput_Edges_E extends ResthopperParameter {

	public name: string = "Edges";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromLengthOutput_Indices_I extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
