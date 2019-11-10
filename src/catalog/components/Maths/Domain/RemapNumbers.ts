import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RemapNumbers extends ResthopperComponent {

	public guid: string = "2fcc2743-8339-4cdf-a046-a1f17439191d";
	public name: string = "RemapNumbers";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Remap numbers into a new numeric domain";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Value_V": RemapNumbersInput_Value_V,
		"Source_S": RemapNumbersInput_Source_S,
		"Target_T": RemapNumbersInput_Target_T,
	}

	public output:
	{
		"Mapped_R": RemapNumbersOutput_Mapped_R,
		"Clipped_C": RemapNumbersOutput_Clipped_C,
	}

	constructor() {
		super();
		this.input = {
			"Value_V": new RemapNumbersInput_Value_V(),
			"Source_S": new RemapNumbersInput_Source_S(),
			"Target_T": new RemapNumbersInput_Target_T(),
		}
		this.output = {
			"Mapped_R": new RemapNumbersOutput_Mapped_R(),
			"Clipped_C": new RemapNumbersOutput_Clipped_C(),
		}
	}

}

class RemapNumbersInput_Value_V extends ResthopperParameter {

	public name: string = "Value";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RemapNumbersInput_Source_S extends ResthopperParameter {

	public name: string = "Source";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RemapNumbersInput_Target_T extends ResthopperParameter {

	public name: string = "Target";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RemapNumbersOutput_Mapped_R extends ResthopperParameter {

	public name: string = "Mapped";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RemapNumbersOutput_Clipped_C extends ResthopperParameter {

	public name: string = "Clipped";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
