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
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"brep_b": EdgesfromLinearityInput_brep_b,
		"maximum_l": EdgesfromLinearityInput_maximum_l,
	}

	public output:
	{
		"edges_e": EdgesfromLinearityOutput_edges_e,
		"indices_i": EdgesfromLinearityOutput_indices_i,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new EdgesfromLinearityInput_brep_b(),
			"maximum_l": new EdgesfromLinearityInput_maximum_l(),
		}
		this.output = {
			"edges_e": new EdgesfromLinearityOutput_edges_e(),
			"indices_i": new EdgesfromLinearityOutput_indices_i(),
		}
	}

}

class EdgesfromLinearityInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromLinearityInput_maximum_l extends ResthopperParameter {

	public name: string = "Maximum";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromLinearityOutput_edges_e extends ResthopperParameter {

	public name: string = "Edges";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EdgesfromLinearityOutput_indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
