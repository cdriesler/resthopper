import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DateRange extends ResthopperComponent {

	public guid: string = "38a4e722-ad5a-4229-a170-e27ae1345538";
	public name: string = "Date Range";
	public nickName: string = "RDate";
	public category: string = "Maths";
	public subCategory: string = "Time";
	public description: string = "Create a range of successive dates or times";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"timea_a": DateRangeInput_timea_a,
		"timeb_b": DateRangeInput_timeb_b,
		"count_n": DateRangeInput_count_n,
	}

	public output:
	{
		"range_r": DateRangeOutput_range_r,
	}

	constructor() {
		super();
		this.input = {
			"timea_a": new DateRangeInput_timea_a(),
			"timeb_b": new DateRangeInput_timeb_b(),
			"count_n": new DateRangeInput_count_n(),
		}
		this.output = {
			"range_r": new DateRangeOutput_range_r(),
		}
	}

}

class DateRangeInput_timea_a extends ResthopperParameter {

	public name: string = "TimeA";
	public nickName: string = "A";
	public description: string = "Empty Time parameter"
	public isOptional: boolean = false;
	public typeName: string = "Time"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DateRangeInput_timeb_b extends ResthopperParameter {

	public name: string = "TimeB";
	public nickName: string = "B";
	public description: string = "Empty Time parameter"
	public isOptional: boolean = false;
	public typeName: string = "Time"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DateRangeInput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DateRangeOutput_range_r extends ResthopperParameter {

	public name: string = "Range";
	public nickName: string = "R";
	public description: string = "Empty Time parameter"
	public isOptional: boolean = false;
	public typeName: string = "Time"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
