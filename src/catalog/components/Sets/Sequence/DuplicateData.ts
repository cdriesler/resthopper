import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DuplicateData extends ResthopperComponent {

	public guid: string = "dd8134c0-109b-4012-92be-51d843edfff7";
	public name: string = "Duplicate Data";
	public nickName: string = "Dup";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Duplicate data a predefined number of times.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"data_d": DuplicateDataInput_data_d,
		"number_n": DuplicateDataInput_number_n,
		"order_o": DuplicateDataInput_order_o,
	}

	public output:
	{
		"data_d": DuplicateDataOutput_data_d,
	}

	constructor() {
		super();
		this.input = {
			"data_d": new DuplicateDataInput_data_d(),
			"number_n": new DuplicateDataInput_number_n(),
			"order_o": new DuplicateDataInput_order_o(),
		}
		this.output = {
			"data_d": new DuplicateDataOutput_data_d(),
		}
	}

}

class DuplicateDataInput_data_d extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DuplicateDataInput_number_n extends ResthopperParameter {

	public name: string = "Number";
	public nickName: string = "N";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DuplicateDataInput_order_o extends ResthopperParameter {

	public name: string = "Order";
	public nickName: string = "O";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DuplicateDataOutput_data_d extends ResthopperParameter {

	public name: string = "Data";
	public nickName: string = "D";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
