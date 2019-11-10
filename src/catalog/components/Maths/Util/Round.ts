import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Round extends ResthopperComponent {

	public guid: string = "a50c4a3b-0177-4c91-8556-db95de6c56c8";
	public name: string = "Round";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Round a floating point value.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"number_x": RoundInput_number_x,
	}

	public output:
	{
		"nearest_n": RoundOutput_nearest_n,
		"floor_f": RoundOutput_floor_f,
		"ceiling_c": RoundOutput_ceiling_c,
	}

	constructor() {
		super();
		this.input = {
			"number_x": new RoundInput_number_x(),
		}
		this.output = {
			"nearest_n": new RoundOutput_nearest_n(),
			"floor_f": new RoundOutput_floor_f(),
			"ceiling_c": new RoundOutput_ceiling_c(),
		}
	}

}

class RoundInput_number_x extends ResthopperParameter {

	public name: string = "Number";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RoundOutput_nearest_n extends ResthopperParameter {

	public name: string = "Nearest";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RoundOutput_floor_f extends ResthopperParameter {

	public name: string = "Floor";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RoundOutput_ceiling_c extends ResthopperParameter {

	public name: string = "Ceiling";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
