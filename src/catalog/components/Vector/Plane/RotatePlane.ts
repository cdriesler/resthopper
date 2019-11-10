import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RotatePlane extends ResthopperComponent {

	public guid: string = "f6f14b09-6497-4564-8403-09e4eb5a6b82";
	public name: string = "RotatePlane";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Perform plane rotation around plane z-axis";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"plane_p": RotatePlaneInput_plane_p,
		"angle_a": RotatePlaneInput_angle_a,
	}

	public output:
	{
		"plane_p": RotatePlaneOutput_plane_p,
	}

	constructor() {
		super();
		this.input = {
			"plane_p": new RotatePlaneInput_plane_p(),
			"angle_a": new RotatePlaneInput_angle_a(),
		}
		this.output = {
			"plane_p": new RotatePlaneOutput_plane_p(),
		}
	}

}

class RotatePlaneInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotatePlaneInput_angle_a extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotatePlaneOutput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
