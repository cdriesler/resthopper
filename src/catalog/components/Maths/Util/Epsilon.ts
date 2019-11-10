import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Epsilon extends ResthopperComponent {

	public guid: string = "deadf87d-99a6-4980-90c3-f98350aa6f0f";
	public name: string = "Epsilon";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Returns a factor of double precision floating point epsilon.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Factor_N": EpsilonInput_Factor_N,
	}

	public output:
	{
		"Output_y": EpsilonOutput_Output_y,
	}

	constructor() {
		super();
		this.input = {
			"Factor_N": new EpsilonInput_Factor_N(),
		}
		this.output = {
			"Output_y": new EpsilonOutput_Output_y(),
		}
	}

}

class EpsilonInput_Factor_N extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class EpsilonOutput_Output_y extends ResthopperParameter {

	public name: string = "Output";
	public nickName: string = "y";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
