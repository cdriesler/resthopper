import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructMatrix extends ResthopperComponent {

	public guid: string = "3aa2a080-e322-4be3-8c6e-baf6c8000cf1";
	public name: string = "DeconstructMatrix";
	public category: string = "Maths";
	public subCategory: string = "Matrix";
	public description: string = "Deconstruct a matrix into its component parts";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Matrix_M": DeconstructMatrixInput_Matrix_M,
	}

	public output:
	{
		"Rows_R": DeconstructMatrixOutput_Rows_R,
		"Columns_C": DeconstructMatrixOutput_Columns_C,
		"Values_V": DeconstructMatrixOutput_Values_V,
	}

	constructor() {
		super();
		this.input = {
			"Matrix_M": new DeconstructMatrixInput_Matrix_M(),
		}
		this.output = {
			"Rows_R": new DeconstructMatrixOutput_Rows_R(),
			"Columns_C": new DeconstructMatrixOutput_Columns_C(),
			"Values_V": new DeconstructMatrixOutput_Values_V(),
		}
	}

}

class DeconstructMatrixInput_Matrix_M extends ResthopperParameter {

	public name: string = "Matrix";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Matrix;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructMatrixOutput_Rows_R extends ResthopperParameter {

	public name: string = "Rows";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructMatrixOutput_Columns_C extends ResthopperParameter {

	public name: string = "Columns";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructMatrixOutput_Values_V extends ResthopperParameter {

	public name: string = "Values";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
