import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class InvertMatrix extends ResthopperComponent {

	public guid: string = "f986e79a-1215-4822-a1e7-3311dbdeb851";
	public name: string = "InvertMatrix";
	public category: string = "Maths";
	public subCategory: string = "Matrix";
	public description: string = "Invert a matrix";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Matrix_M": InvertMatrixInput_Matrix_M,
		"Tolerance_t": InvertMatrixInput_Tolerance_t,
	}

	public output:
	{
		"Matrix_M": InvertMatrixOutput_Matrix_M,
		"Success_S": InvertMatrixOutput_Success_S,
	}

	constructor() {
		super();
		this.input = {
			"Matrix_M": new InvertMatrixInput_Matrix_M(),
			"Tolerance_t": new InvertMatrixInput_Tolerance_t(),
		}
		this.output = {
			"Matrix_M": new InvertMatrixOutput_Matrix_M(),
			"Success_S": new InvertMatrixOutput_Success_S(),
		}
	}

}

class InvertMatrixInput_Matrix_M extends ResthopperParameter {

	public name: string = "Matrix";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Matrix;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InvertMatrixInput_Tolerance_t extends ResthopperParameter {

	public name: string = "Tolerance";
	public nickName: string = "t";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InvertMatrixOutput_Matrix_M extends ResthopperParameter {

	public name: string = "Matrix";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Matrix;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InvertMatrixOutput_Success_S extends ResthopperParameter {

	public name: string = "Success";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
