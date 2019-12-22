import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class InvertMatrix extends ResthopperComponent {

	public guid: string = "f986e79a-1215-4822-a1e7-3311dbdeb851";
	public name: string = "Invert Matrix";
	public nickName: string = "MInvert";
	public category: string = "Maths";
	public subCategory: string = "Matrix";
	public description: string = "Invert a matrix";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"matrix_m": InvertMatrixInput_matrix_m,
		"tolerance_t": InvertMatrixInput_tolerance_t,
	}

	public output:
	{
		"matrix_m": InvertMatrixOutput_matrix_m,
		"success_s": InvertMatrixOutput_success_s,
	}

	constructor() {
		super();
		this.input = {
			"matrix_m": new InvertMatrixInput_matrix_m(),
			"tolerance_t": new InvertMatrixInput_tolerance_t(),
		}
		this.output = {
			"matrix_m": new InvertMatrixOutput_matrix_m(),
			"success_s": new InvertMatrixOutput_success_s(),
		}
	}

}

class InvertMatrixInput_matrix_m extends ResthopperParameter {

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

class InvertMatrixInput_tolerance_t extends ResthopperParameter {

	public name: string = "Tolerance";
	public nickName: string = "t";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class InvertMatrixOutput_matrix_m extends ResthopperParameter {

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

class InvertMatrixOutput_success_s extends ResthopperParameter {

	public name: string = "Success";
	public nickName: string = "S";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
