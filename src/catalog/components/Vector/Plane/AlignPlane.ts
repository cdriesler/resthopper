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
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"plane_p": AlignPlaneInput_plane_p,
		"direction_d": AlignPlaneInput_direction_d,
	}

	public output:
	{
		"plane_p": AlignPlaneOutput_plane_p,
		"angle_a": AlignPlaneOutput_angle_a,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new AlignPlaneInput_plane_p(),
			"direction_d": new AlignPlaneInput_direction_d(),
		}
		this.output = {
			"plane_p": new AlignPlaneOutput_plane_p(),
			"angle_a": new AlignPlaneOutput_angle_a(),
		}
	}

}

class AlignPlaneInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignPlaneInput_direction_d extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignPlaneOutput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AlignPlaneOutput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
