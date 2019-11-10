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
		"brep_b": EdgesfromLengthInput_brep_b,
		"maximum_l": EdgesfromLengthInput_maximum_l,
	}

	public output:
	{
		"edges_e": EdgesfromLengthOutput_edges_e,
		"indices_i": EdgesfromLengthOutput_indices_i,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new EdgesfromLengthInput_brep_b(),
			"maximum_l": new EdgesfromLengthInput_maximum_l(),
		}
		this.output = {
			"edges_e": new EdgesfromLengthOutput_edges_e(),
			"indices_i": new EdgesfromLengthOutput_indices_i(),
		}
	}

}

class EdgesfromLengthInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromLengthInput_maximum_l extends ResthopperParameter {

	public name: string = "Maximum";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromLengthOutput_edges_e extends ResthopperParameter {

	public name: string = "Edges";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromLengthOutput_indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
