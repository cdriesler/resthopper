import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SwapRows extends ResthopperComponent {

	public guid: string = "8600a3fc-30f0-4df6-b126-aaa79ece5bfe";
	public name: string = "SwapRows";
	public category: string = "Maths";
	public subCategory: string = "Matrix";
	public description: string = "Swap two rows in a matrix";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Matrix_M": SwapRowsInput_Matrix_M,
		"RowA_A": SwapRowsInput_RowA_A,
		"RowB_B": SwapRowsInput_RowB_B,
	}

	public output:
	{
		"Matrix_M": SwapRowsOutput_Matrix_M,
	}

	constructor() {
		super();
		this.input = {
			"Matrix_M": new SwapRowsInput_Matrix_M(),
			"RowA_A": new SwapRowsInput_RowA_A(),
			"RowB_B": new SwapRowsInput_RowB_B(),
		}
		this.output = {
			"Matrix_M": new SwapRowsOutput_Matrix_M(),
		}
	}

}

class SwapRowsInput_Matrix_M extends ResthopperParameter {

	public name: string = "Matrix";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Matrix;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwapRowsInput_RowA_A extends ResthopperParameter {

	public name: string = "RowA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwapRowsInput_RowB_B extends ResthopperParameter {

	public name: string = "RowB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwapRowsOutput_Matrix_M extends ResthopperParameter {

	public name: string = "Matrix";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Matrix;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
