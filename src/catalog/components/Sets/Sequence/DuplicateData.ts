import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DuplicateData extends ResthopperComponent {

	public guid: string = "dd8134c0-109b-4012-92be-51d843edfff7";
	public name: string = "DuplicateData";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Duplicate data a predefined number of times.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Data_D": DuplicateDataInput_Data_D,
		"Number_N": DuplicateDataInput_Number_N,
		"Order_O": DuplicateDataInput_Order_O,
	}

	public output:
	{
		"Data_D": DuplicateDataOutput_Data_D,
	}

	constructor() {
		super();
		this.input = {
			"Data_D": new DuplicateDataInput_Data_D(),
			"Number_N": new DuplicateDataInput_Number_N(),
			"Order_O": new DuplicateDataInput_Order_O(),
		}
		this.output = {
			"Data_D": new DuplicateDataOutput_Data_D(),
		}
	}

}

class DuplicateDataInput_Data_D extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DuplicateDataInput_Number_N extends ResthopperParameter {

	public name: string = "Number";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DuplicateDataInput_Order_O extends ResthopperParameter {

	public name: string = "Order";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DuplicateDataOutput_Data_D extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
