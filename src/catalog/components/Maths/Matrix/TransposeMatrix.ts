import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TransposeMatrix extends ResthopperComponent {

	public guid: string = "0e90b1f3-b870-4e09-8711-4bf819675d90";
	public name: string = "Transpose Matrix";
	public nickName: string = "Transpose";
	public category: string = "Maths";
	public subCategory: string = "Matrix";
	public description: string = "Transpose a matrix (swap rows and columns)";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"matrix_m": TransposeMatrixInput_matrix_m,
	}

	public output:
	{
		"matrix_m": TransposeMatrixOutput_matrix_m,
	}

	constructor() {
		super();
		this.input = {
			"matrix_m": new TransposeMatrixInput_matrix_m(),
		}
		this.output = {
			"matrix_m": new TransposeMatrixOutput_matrix_m(),
		}
	}

}

class TransposeMatrixInput_matrix_m extends ResthopperParameter {

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

class TransposeMatrixOutput_matrix_m extends ResthopperParameter {

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
