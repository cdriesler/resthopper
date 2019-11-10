import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SwapColumns extends ResthopperComponent {

	public guid: string = "4cebcaf7-9a6a-435b-8f8f-95a62bacb0f2";
	public name: string = "SwapColumns";
	public category: string = "Maths";
	public subCategory: string = "Matrix";
	public description: string = "Swap two columns in a matrix";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Matrix_M": SwapColumnsInput_Matrix_M,
		"ColumnA_A": SwapColumnsInput_ColumnA_A,
		"ColumnB_B": SwapColumnsInput_ColumnB_B,
	}

	public output:
	{
		"Matrix_M": SwapColumnsOutput_Matrix_M,
	}

	constructor() {
		super();
		this.input = {
			"Matrix_M": new SwapColumnsInput_Matrix_M(),
			"ColumnA_A": new SwapColumnsInput_ColumnA_A(),
			"ColumnB_B": new SwapColumnsInput_ColumnB_B(),
		}
		this.output = {
			"Matrix_M": new SwapColumnsOutput_Matrix_M(),
		}
	}

}

class SwapColumnsInput_Matrix_M extends ResthopperParameter {

	public name: string = "Matrix";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Matrix;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwapColumnsInput_ColumnA_A extends ResthopperParameter {

	public name: string = "ColumnA";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwapColumnsInput_ColumnB_B extends ResthopperParameter {

	public name: string = "ColumnB";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwapColumnsOutput_Matrix_M extends ResthopperParameter {

	public name: string = "Matrix";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Matrix;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
