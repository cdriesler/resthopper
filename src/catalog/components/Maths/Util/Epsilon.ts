import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Epsilon extends ResthopperComponent {

	public guid: string = "deadf87d-99a6-4980-90c3-f98350aa6f0f";
	public name: string = "Epsilon";
	public nickName: string = "Eps";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Returns a factor of double precision floating point epsilon.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"factor_n": EpsilonInput_factor_n,
	}

	public output:
	{
		"output_y": EpsilonOutput_output_y,
	}

	constructor() {
		super();
		this.input = {
			"factor_n": new EpsilonInput_factor_n(),
		}
		this.output = {
			"output_y": new EpsilonOutput_output_y(),
		}
	}

}

class EpsilonInput_factor_n extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "N";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EpsilonOutput_output_y extends ResthopperParameter {

	public name: string = "Output";
	public nickName: string = "y";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
