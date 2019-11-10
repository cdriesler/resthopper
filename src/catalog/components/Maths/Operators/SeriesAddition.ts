import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SeriesAddition extends ResthopperComponent {

	public guid: string = "586706a8-109b-43ec-b581-743e920c951a";
	public name: string = "SeriesAddition";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform serial addition until a goal has been reached";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Numbers_N": SeriesAdditionInput_Numbers_N,
		"Goal_G": SeriesAdditionInput_Goal_G,
		"Start_S": SeriesAdditionInput_Start_S,
	}

	public output:
	{
		"Series_S": SeriesAdditionOutput_Series_S,
		"Remainder_R": SeriesAdditionOutput_Remainder_R,
	}

	constructor() {
		super();
		this.input = {
			"Numbers_N": new SeriesAdditionInput_Numbers_N(),
			"Goal_G": new SeriesAdditionInput_Goal_G(),
			"Start_S": new SeriesAdditionInput_Start_S(),
		}
		this.output = {
			"Series_S": new SeriesAdditionOutput_Series_S(),
			"Remainder_R": new SeriesAdditionOutput_Remainder_R(),
		}
	}

}

class SeriesAdditionInput_Numbers_N extends ResthopperParameter {

	public name: string = "Numbers";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SeriesAdditionInput_Goal_G extends ResthopperParameter {

	public name: string = "Goal";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SeriesAdditionInput_Start_S extends ResthopperParameter {

	public name: string = "Start";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SeriesAdditionOutput_Series_S extends ResthopperParameter {

	public name: string = "Series";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SeriesAdditionOutput_Remainder_R extends ResthopperParameter {

	public name: string = "Remainder";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
