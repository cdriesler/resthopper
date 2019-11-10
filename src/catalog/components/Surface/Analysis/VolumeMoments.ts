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
		"Geometry_G": VolumeMomentsInput_Geometry_G,
	}

	public output:
	{
		"Volume_V": VolumeMomentsOutput_Volume_V,
		"Centroid_C": VolumeMomentsOutput_Centroid_C,
		"Inertiaerror_I": VolumeMomentsOutput_Inertiaerror_I,
		"Secondaryerror_S": VolumeMomentsOutput_Secondaryerror_S,
		"Gyration_G": VolumeMomentsOutput_Gyration_G,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new VolumeMomentsInput_Geometry_G(),
		}
		this.output = {
			"Volume_V": new VolumeMomentsOutput_Volume_V(),
			"Centroid_C": new VolumeMomentsOutput_Centroid_C(),
			"Inertiaerror_I": new VolumeMomentsOutput_Inertiaerror_I(),
			"Secondaryerror_S": new VolumeMomentsOutput_Secondaryerror_S(),
			"Gyration_G": new VolumeMomentsOutput_Gyration_G(),
		}
	}

}

class VolumeMomentsInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VolumeMomentsOutput_Volume_V extends ResthopperParameter {

	public name: string = "Volume";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VolumeMomentsOutput_Centroid_C extends ResthopperParameter {

	public name: string = "Centroid";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VolumeMomentsOutput_Inertiaerror_I extends ResthopperParameter {

	public name: string = "Inertiaerror";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VolumeMomentsOutput_Secondaryerror_S extends ResthopperParameter {

	public name: string = "Secondaryerror";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class VolumeMomentsOutput_Gyration_G extends ResthopperParameter {

	public name: string = "Gyration";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
