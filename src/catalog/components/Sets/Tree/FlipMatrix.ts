import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FlipMatrix extends ResthopperComponent {

	public guid: string = "41aa4112-9c9b-42f4-847e-503b9d90e4c7";
	public name: string = "FlipMatrix";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Flip a matrix-like data tree by swapping rows and columns.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Data_D": FlipMatrixInput_Data_D,
	}

	public output:
	{
		"Data_D": FlipMatrixOutput_Data_D,
	}

	constructor() {
		super();
		this.input = {
			"Data_D": new FlipMatrixInput_Data_D(),
		}
		this.output = {
			"Data_D": new FlipMatrixOutput_Data_D(),
		}
	}

}

class FlipMatrixInput_Data_D extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FlipMatrixOutput_Data_D extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
