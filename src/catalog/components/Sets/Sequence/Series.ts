import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Series extends ResthopperComponent {

	public guid: string = "e64c5fb1-845c-4ab1-8911-5f338516ba67";
	public name: string = "Series";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Create a series of numbers.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Start_S": SeriesInput_Start_S,
		"Step_N": SeriesInput_Step_N,
		"Count_C": SeriesInput_Count_C,
	}

	public output:
	{
		"Series_S": SeriesOutput_Series_S,
	}

	constructor() {
		super();
		this.input = {
			"Start_S": new SeriesInput_Start_S(),
			"Step_N": new SeriesInput_Step_N(),
			"Count_C": new SeriesInput_Count_C(),
		}
		this.output = {
			"Series_S": new SeriesOutput_Series_S(),
		}
	}

}

class SeriesInput_Start_S extends ResthopperParameter {

	public name: string = "Start";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SeriesInput_Step_N extends ResthopperParameter {

	public name: string = "Step";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SeriesInput_Count_C extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SeriesOutput_Series_S extends ResthopperParameter {

	public name: string = "Series";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
