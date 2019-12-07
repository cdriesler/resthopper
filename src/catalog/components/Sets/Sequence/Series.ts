import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Series extends ResthopperComponent {

	public guid: string = "e64c5fb1-845c-4ab1-8911-5f338516ba67";
	public name: string = "Series";
	public nickName: string = "Series";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Create a series of numbers.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"start_s": SeriesInput_start_s,
		"step_n": SeriesInput_step_n,
		"count_c": SeriesInput_count_c,
	}

	public output:
	{
		"series_s": SeriesOutput_series_s,
	}

	constructor() {
		super();
		this.input = {
			"start_s": new SeriesInput_start_s(),
			"step_n": new SeriesInput_step_n(),
			"count_c": new SeriesInput_count_c(),
		}
		this.output = {
			"series_s": new SeriesOutput_series_s(),
		}
	}

}

class SeriesInput_start_s extends ResthopperParameter {

	public name: string = "Start";
	public nickName: string = "S";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SeriesInput_step_n extends ResthopperParameter {

	public name: string = "Step";
	public nickName: string = "N";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SeriesInput_count_c extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "C";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SeriesOutput_series_s extends ResthopperParameter {

	public name: string = "Series";
	public nickName: string = "S";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
