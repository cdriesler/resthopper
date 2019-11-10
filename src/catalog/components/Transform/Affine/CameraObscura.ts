import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CameraObscura extends ResthopperComponent {

	public guid: string = "407e35c6-7c40-4652-bd80-fde1eb7ec034";
	public name: string = "CameraObscura";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Camera Obscura (point mirror) transformation.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"Geometry_G": CameraObscuraInput_Geometry_G,
		"Point_P": CameraObscuraInput_Point_P,
		"Factor_F": CameraObscuraInput_Factor_F,
	}

	public output:
	{
		"Geometry_G": CameraObscuraOutput_Geometry_G,
		"Transform_X": CameraObscuraOutput_Transform_X,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new CameraObscuraInput_Geometry_G(),
			"Point_P": new CameraObscuraInput_Point_P(),
			"Factor_F": new CameraObscuraInput_Factor_F(),
		}
		this.output = {
			"Geometry_G": new CameraObscuraOutput_Geometry_G(),
			"Transform_X": new CameraObscuraOutput_Transform_X(),
		}
	}

}

class CameraObscuraInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = true;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CameraObscuraInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CameraObscuraInput_Factor_F extends ResthopperParameter {

	public name: string = "Factor";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CameraObscuraOutput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CameraObscuraOutput_Transform_X extends ResthopperParameter {

	public name: string = "Transform";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Transform;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
