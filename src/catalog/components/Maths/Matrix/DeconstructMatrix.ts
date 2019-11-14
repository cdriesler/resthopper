import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstructMatrix extends ResthopperComponent {

	public guid: string = "3aa2a080-e322-4be3-8c6e-baf6c8000cf1";
	public name: string = "DeconstructMatrix";
	public nickName: string = "DeMatrix";
	public category: string = "Maths";
	public subCategory: string = "Matrix";
	public description: string = "Deconstruct a matrix into its component parts";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"matrix_m": DeconstructMatrixInput_matrix_m,
	}

	public output:
	{
		"rows_r": DeconstructMatrixOutput_rows_r,
		"columns_c": DeconstructMatrixOutput_columns_c,
		"values_v": DeconstructMatrixOutput_values_v,
	}

	constructor() {
		super();
		this.input = {
			"matrix_m": new DeconstructMatrixInput_matrix_m(),
		}
		this.output = {
			"rows_r": new DeconstructMatrixOutput_rows_r(),
			"columns_c": new DeconstructMatrixOutput_columns_c(),
			"values_v": new DeconstructMatrixOutput_values_v(),
		}
	}

}

class DeconstructMatrixInput_matrix_m extends ResthopperParameter {

	public name: string = "Matrix";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Matrix"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructMatrixOutput_rows_r extends ResthopperParameter {

	public name: string = "Rows";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructMatrixOutput_columns_c extends ResthopperParameter {

	public name: string = "Columns";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstructMatrixOutput_values_v extends ResthopperParameter {

	public name: string = "Values";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
