import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructMatrix extends ResthopperComponent {

	public guid: string = "54ac80cf-74f3-43f7-834c-0e3fe94632c6";
	public name: string = "ConstructMatrix";
	public nickName: string = "Matrix";
	public category: string = "Maths";
	public subCategory: string = "Matrix";
	public description: string = "Construct a matrix from initial values";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"rows_r": ConstructMatrixInput_rows_r,
		"columns_c": ConstructMatrixInput_columns_c,
		"values_v": ConstructMatrixInput_values_v,
	}

	public output:
	{
		"matrix_m": ConstructMatrixOutput_matrix_m,
	}

	constructor() {
		super();
		this.input = {
			"rows_r": new ConstructMatrixInput_rows_r(),
			"columns_c": new ConstructMatrixInput_columns_c(),
			"values_v": new ConstructMatrixInput_values_v(),
		}
		this.output = {
			"matrix_m": new ConstructMatrixOutput_matrix_m(),
		}
	}

}

class ConstructMatrixInput_rows_r extends ResthopperParameter {

	public name: string = "Rows";
	public nickName: string = "R";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructMatrixInput_columns_c extends ResthopperParameter {

	public name: string = "Columns";
	public nickName: string = "C";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructMatrixInput_values_v extends ResthopperParameter {

	public name: string = "Values";
	public nickName: string = "V";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ConstructMatrixOutput_matrix_m extends ResthopperParameter {

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
