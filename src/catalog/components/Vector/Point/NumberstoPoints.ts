import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class NumberstoPoints extends ResthopperComponent {

	public guid: string = "0ae07da9-951b-4b9b-98ca-d312c252374d";
	public name: string = "NumberstoPoints";
	public nickName: string = "Num2Pt";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Convert a list of numbers to a list of points";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"numbers_n": NumberstoPointsInput_numbers_n,
		"mask_m": NumberstoPointsInput_mask_m,
	}

	public output:
	{
		"points_p": NumberstoPointsOutput_points_p,
	}

	constructor() {
		super();
		this.input = {
			"numbers_n": new NumberstoPointsInput_numbers_n(),
			"mask_m": new NumberstoPointsInput_mask_m(),
		}
		this.output = {
			"points_p": new NumberstoPointsOutput_points_p(),
		}
	}

}

class NumberstoPointsInput_numbers_n extends ResthopperParameter {

	public name: string = "Numbers";
	public nickName: string = "N";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NumberstoPointsInput_mask_m extends ResthopperParameter {

	public name: string = "Mask";
	public nickName: string = "M";
	public description: string = "Empty Coordinate Mask parameter"
	public isOptional: boolean = false;
	public typeName: string = "Coordinate Mask"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NumberstoPointsOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
