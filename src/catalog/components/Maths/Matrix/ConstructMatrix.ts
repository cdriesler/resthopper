import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructMatrix extends ResthopperComponent {

	public guid: string = "54ac80cf-74f3-43f7-834c-0e3fe94632c6";
	public name: string = "ConstructMatrix";
	public category: string = "Maths";
	public subCategory: string = "Matrix";
	public description: string = "Construct a matrix from initial values";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Rows_R": ConstructMatrixInput_Rows_R,
		"Columns_C": ConstructMatrixInput_Columns_C,
		"Values_V": ConstructMatrixInput_Values_V,
	}

	public output:
	{
		"Matrix_M": ConstructMatrixOutput_Matrix_M,
	}

	constructor() {
		super();
		this.input = {
			"Rows_R": new ConstructMatrixInput_Rows_R(),
			"Columns_C": new ConstructMatrixInput_Columns_C(),
			"Values_V": new ConstructMatrixInput_Values_V(),
		}
		this.output = {
			"Matrix_M": new ConstructMatrixOutput_Matrix_M(),
		}
	}

}

class ConstructMatrixInput_Rows_R extends ResthopperParameter {

	public name: string = "Rows";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructMatrixInput_Columns_C extends ResthopperParameter {

	public name: string = "Columns";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructMatrixInput_Values_V extends ResthopperParameter {

	public name: string = "Values";
	public nickName: string = "V";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructMatrixOutput_Matrix_M extends ResthopperParameter {

	public name: string = "Matrix";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Matrix;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
