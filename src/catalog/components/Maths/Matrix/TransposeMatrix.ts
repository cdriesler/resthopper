import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TransposeMatrix extends ResthopperComponent {

	public guid: string = "0e90b1f3-b870-4e09-8711-4bf819675d90";
	public name: string = "TransposeMatrix";
	public category: string = "Maths";
	public subCategory: string = "Matrix";
	public description: string = "Transpose a matrix (swap rows and columns)";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Matrix_M": TransposeMatrixInput_Matrix_M,
	}

	public output:
	{
		"Matrix_M": TransposeMatrixOutput_Matrix_M,
	}

	constructor() {
		super();
		this.input = {
			"Matrix_M": new TransposeMatrixInput_Matrix_M(),
		}
		this.output = {
			"Matrix_M": new TransposeMatrixOutput_Matrix_M(),
		}
	}

}

class TransposeMatrixInput_Matrix_M extends ResthopperParameter {

	public name: string = "Matrix";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Matrix;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TransposeMatrixOutput_Matrix_M extends ResthopperParameter {

	public name: string = "Matrix";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Matrix;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
