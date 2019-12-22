import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SwapRows extends ResthopperComponent {

	public guid: string = "8600a3fc-30f0-4df6-b126-aaa79ece5bfe";
	public name: string = "Swap Rows";
	public nickName: string = "SwapR";
	public category: string = "Maths";
	public subCategory: string = "Matrix";
	public description: string = "Swap two rows in a matrix";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"matrix_m": SwapRowsInput_matrix_m,
		"rowa_a": SwapRowsInput_rowa_a,
		"rowb_b": SwapRowsInput_rowb_b,
	}

	public output:
	{
		"matrix_m": SwapRowsOutput_matrix_m,
	}

	constructor() {
		super();
		this.input = {
			"matrix_m": new SwapRowsInput_matrix_m(),
			"rowa_a": new SwapRowsInput_rowa_a(),
			"rowb_b": new SwapRowsInput_rowb_b(),
		}
		this.output = {
			"matrix_m": new SwapRowsOutput_matrix_m(),
		}
	}

}

class SwapRowsInput_matrix_m extends ResthopperParameter {

	public name: string = "Matrix";
	public nickName: string = "M";
	public description: string = "Empty Matrix parameter"
	public isOptional: boolean = false;
	public typeName: string = "Matrix"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwapRowsInput_rowa_a extends ResthopperParameter {

	public name: string = "RowA";
	public nickName: string = "A";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwapRowsInput_rowb_b extends ResthopperParameter {

	public name: string = "RowB";
	public nickName: string = "B";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwapRowsOutput_matrix_m extends ResthopperParameter {

	public name: string = "Matrix";
	public nickName: string = "M";
	public description: string = "Empty Matrix parameter"
	public isOptional: boolean = false;
	public typeName: string = "Matrix"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
