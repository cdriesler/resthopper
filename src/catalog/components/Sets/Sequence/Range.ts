import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Range extends ResthopperComponent {

	public guid: string = "9445ca40-cc73-4861-a455-146308676855";
	public name: string = "Range";
	public category: string = "Sets";
	public subCategory: string = "Sequence";
	public description: string = "Create a range of numbers.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Domain_D": RangeInput_Domain_D,
		"Steps_N": RangeInput_Steps_N,
	}

	public output:
	{
		"Range_R": RangeOutput_Range_R,
	}

	constructor() {
		super();
		this.input = {
			"Domain_D": new RangeInput_Domain_D(),
			"Steps_N": new RangeInput_Steps_N(),
		}
		this.output = {
			"Range_R": new RangeOutput_Range_R(),
		}
	}

}

class RangeInput_Domain_D extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RangeInput_Steps_N extends ResthopperParameter {

	public name: string = "Steps";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RangeOutput_Range_R extends ResthopperParameter {

	public name: string = "Range";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
