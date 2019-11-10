import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VolumeMoments extends ResthopperComponent {

	public guid: string = "4b5f79e1-c2b3-4b9c-b97d-470145a3ca74";
	public name: string = "VolumeMoments";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Solve volume properties for closed breps and meshes.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"geometry_g": VolumeMomentsInput_geometry_g,
	}

	public output:
	{
		"volume_v": VolumeMomentsOutput_volume_v,
		"centroid_c": VolumeMomentsOutput_centroid_c,
		"inertiaerror_i": VolumeMomentsOutput_inertiaerror_i,
		"secondaryerror_s": VolumeMomentsOutput_secondaryerror_s,
		"gyration_g": VolumeMomentsOutput_gyration_g,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new VolumeMomentsInput_geometry_g(),
		}
		this.output = {
			"volume_v": new VolumeMomentsOutput_volume_v(),
			"centroid_c": new VolumeMomentsOutput_centroid_c(),
			"inertiaerror_i": new VolumeMomentsOutput_inertiaerror_i(),
			"secondaryerror_s": new VolumeMomentsOutput_secondaryerror_s(),
			"gyration_g": new VolumeMomentsOutput_gyration_g(),
		}
	}

}

class VolumeMomentsInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VolumeMomentsOutput_volume_v extends ResthopperParameter {

	public name: string = "Volume";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VolumeMomentsOutput_centroid_c extends ResthopperParameter {

	public name: string = "Centroid";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VolumeMomentsOutput_inertiaerror_i extends ResthopperParameter {

	public name: string = "Inertiaerror";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VolumeMomentsOutput_secondaryerror_s extends ResthopperParameter {

	public name: string = "Secondaryerror";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VolumeMomentsOutput_gyration_g extends ResthopperParameter {

	public name: string = "Gyration";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
