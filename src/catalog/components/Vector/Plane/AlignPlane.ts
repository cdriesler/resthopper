import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class AlignPlane extends ResthopperComponent {

	public guid: string = "e76040ec-3b91-41e1-8e00-c74c23b89391";
	public name: string = "AlignPlane";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Perform minimal rotation to align a plane with a guide vector";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Plane_P": AlignPlaneInput_Plane_P,
		"Direction_D": AlignPlaneInput_Direction_D,
	}

	public output:
	{
		"Plane_P": AlignPlaneOutput_Plane_P,
		"Angle_A": AlignPlaneOutput_Angle_A,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new AlignPlaneInput_Plane_P(),
			"Direction_D": new AlignPlaneInput_Direction_D(),
		}
		this.output = {
			"Plane_P": new AlignPlaneOutput_Plane_P(),
			"Angle_A": new AlignPlaneOutput_Angle_A(),
		}
	}

}

class AlignPlaneInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignPlaneInput_Direction_D extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignPlaneOutput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignPlaneOutput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
