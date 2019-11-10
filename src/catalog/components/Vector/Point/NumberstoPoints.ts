import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class NumberstoPoints extends ResthopperComponent {

	public guid: string = "0ae07da9-951b-4b9b-98ca-d312c252374d";
	public name: string = "NumberstoPoints";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Convert a list of numbers to a list of points";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Numbers_N": NumberstoPointsInput_Numbers_N,
		"Mask_M": NumberstoPointsInput_Mask_M,
	}

	public output:
	{
		"Points_P": NumberstoPointsOutput_Points_P,
	}

	constructor() {
		super();
		this.input = {
			"Numbers_N": new NumberstoPointsInput_Numbers_N(),
			"Mask_M": new NumberstoPointsInput_Mask_M(),
		}
		this.output = {
			"Points_P": new NumberstoPointsOutput_Points_P(),
		}
	}

}

class NumberstoPointsInput_Numbers_N extends ResthopperParameter {

	public name: string = "Numbers";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NumberstoPointsInput_Mask_M extends ResthopperParameter {

	public name: string = "Mask";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Coordinate Mask;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NumberstoPointsOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
