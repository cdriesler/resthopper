import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class AdjustPlane extends ResthopperComponent {

	public guid: string = "9ce34996-d8c6-40d3-b442-1a7c8c093614";
	public name: string = "AdjustPlane";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Adjust a plane to match a new normal direction";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Plane_P": AdjustPlaneInput_Plane_P,
		"Normal_N": AdjustPlaneInput_Normal_N,
	}

	public output:
	{
		"Plane_P": AdjustPlaneOutput_Plane_P,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new AdjustPlaneInput_Plane_P(),
			"Normal_N": new AdjustPlaneInput_Normal_N(),
		}
		this.output = {
			"Plane_P": new AdjustPlaneOutput_Plane_P(),
		}
	}

}

class AdjustPlaneInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AdjustPlaneInput_Normal_N extends ResthopperParameter {

	public name: string = "Normal";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AdjustPlaneOutput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
