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

	public library: string = "Vector Components";

	public input:
	{
		"Plane_P": RotatePlaneInput_Plane_P,
		"Angle_A": RotatePlaneInput_Angle_A,
	}

	public output:
	{
		"Plane_P": RotatePlaneOutput_Plane_P,
	}

	constructor() {
		super();
		this.input = {
			"Plane_P": new RotatePlaneInput_Plane_P(),
			"Angle_A": new RotatePlaneInput_Angle_A(),
		}
		this.output = {
			"Plane_P": new RotatePlaneOutput_Plane_P(),
		}
	}

}

class RotatePlaneInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotatePlaneInput_Angle_A extends ResthopperParameter {

	public name: string = "Angle";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RotatePlaneOutput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
