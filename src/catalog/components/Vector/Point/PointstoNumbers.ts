import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointstoNumbers extends ResthopperComponent {

	public guid: string = "d24169cc-9922-4923-92bc-b9222efc413f";
	public name: string = "PointstoNumbers";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Convert a list of points to a list of numbers";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"points_p": PointstoNumbersInput_points_p,
		"mask_m": PointstoNumbersInput_mask_m,
	}

	public output:
	{
		"numbers_n": PointstoNumbersOutput_numbers_n,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new PointstoNumbersInput_points_p(),
			"mask_m": new PointstoNumbersInput_mask_m(),
		}
		this.output = {
			"numbers_n": new PointstoNumbersOutput_numbers_n(),
		}
	}

}

class PointstoNumbersInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointstoNumbersInput_mask_m extends ResthopperParameter {

	public name: string = "Mask";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Coordinate Mask;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointstoNumbersOutput_numbers_n extends ResthopperParameter {

	public name: string = "Numbers";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
