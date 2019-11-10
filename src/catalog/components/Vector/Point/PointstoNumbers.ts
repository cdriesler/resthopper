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
		"Points_P": PointstoNumbersInput_Points_P,
		"Mask_M": PointstoNumbersInput_Mask_M,
	}

	public output:
	{
		"Numbers_N": PointstoNumbersOutput_Numbers_N,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new PointstoNumbersInput_Points_P(),
			"Mask_M": new PointstoNumbersInput_Mask_M(),
		}
		this.output = {
			"Numbers_N": new PointstoNumbersOutput_Numbers_N(),
		}
	}

}

class PointstoNumbersInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointstoNumbersInput_Mask_M extends ResthopperParameter {

	public name: string = "Mask";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Coordinate Mask;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PointstoNumbersOutput_Numbers_N extends ResthopperParameter {

	public name: string = "Numbers";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
