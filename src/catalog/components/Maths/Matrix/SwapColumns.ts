import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SwapColumns extends ResthopperComponent {

	public guid: string = "4cebcaf7-9a6a-435b-8f8f-95a62bacb0f2";
	public name: string = "SwapColumns";
	public nickName: string = "SwapC";
	public category: string = "Maths";
	public subCategory: string = "Matrix";
	public description: string = "Swap two columns in a matrix";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"matrix_m": SwapColumnsInput_matrix_m,
		"columna_a": SwapColumnsInput_columna_a,
		"columnb_b": SwapColumnsInput_columnb_b,
	}

	public output:
	{
		"matrix_m": SwapColumnsOutput_matrix_m,
	}

	constructor() {
		super();
		this.input = {
			"matrix_m": new SwapColumnsInput_matrix_m(),
			"columna_a": new SwapColumnsInput_columna_a(),
			"columnb_b": new SwapColumnsInput_columnb_b(),
		}
		this.output = {
			"matrix_m": new SwapColumnsOutput_matrix_m(),
		}
	}

}

class SwapColumnsInput_matrix_m extends ResthopperParameter {

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

class SwapColumnsInput_columna_a extends ResthopperParameter {

	public name: string = "ColumnA";
	public nickName: string = "A";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwapColumnsInput_columnb_b extends ResthopperParameter {

	public name: string = "ColumnB";
	public nickName: string = "B";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SwapColumnsOutput_matrix_m extends ResthopperParameter {

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
