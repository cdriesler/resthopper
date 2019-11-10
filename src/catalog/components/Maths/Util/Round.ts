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

	public library: string = "Math Components";

	public input:
	{
		"Number_x": RoundInput_Number_x,
	}

	public output:
	{
		"Nearest_N": RoundOutput_Nearest_N,
		"Floor_F": RoundOutput_Floor_F,
		"Ceiling_C": RoundOutput_Ceiling_C,
	}

	constructor() {
		super();
		this.input = {
			"Number_x": new RoundInput_Number_x(),
		}
		this.output = {
			"Nearest_N": new RoundOutput_Nearest_N(),
			"Floor_F": new RoundOutput_Floor_F(),
			"Ceiling_C": new RoundOutput_Ceiling_C(),
		}
	}

}

class RoundInput_Number_x extends ResthopperParameter {

	public name: string = "Number";
	public nickName: string = "x";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RoundOutput_Nearest_N extends ResthopperParameter {

	public name: string = "Nearest";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RoundOutput_Floor_F extends ResthopperParameter {

	public name: string = "Floor";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RoundOutput_Ceiling_C extends ResthopperParameter {

	public name: string = "Ceiling";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
