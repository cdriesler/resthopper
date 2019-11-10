import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class AreaMoments extends ResthopperComponent {

	public guid: string = "c98c1666-5f29-4bb8-aafd-bb5a708e8a95";
	public name: string = "AreaMoments";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Solve area moments for breps, meshes and planar closed curves.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"geometry_g": AreaMomentsInput_geometry_g,
	}

	public output:
	{
		"area_a": AreaMomentsOutput_area_a,
		"centroid_c": AreaMomentsOutput_centroid_c,
		"inertiaerror_i": AreaMomentsOutput_inertiaerror_i,
		"secondaryerror_s": AreaMomentsOutput_secondaryerror_s,
		"gyration_g": AreaMomentsOutput_gyration_g,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new AreaMomentsInput_geometry_g(),
		}
		this.output = {
			"area_a": new AreaMomentsOutput_area_a(),
			"centroid_c": new AreaMomentsOutput_centroid_c(),
			"inertiaerror_i": new AreaMomentsOutput_inertiaerror_i(),
			"secondaryerror_s": new AreaMomentsOutput_secondaryerror_s(),
			"gyration_g": new AreaMomentsOutput_gyration_g(),
		}
	}

}

class AreaMomentsInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AreaMomentsOutput_area_a extends ResthopperParameter {

	public name: string = "Area";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AreaMomentsOutput_centroid_c extends ResthopperParameter {

	public name: string = "Centroid";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AreaMomentsOutput_inertiaerror_i extends ResthopperParameter {

	public name: string = "Inertiaerror";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AreaMomentsOutput_secondaryerror_s extends ResthopperParameter {

	public name: string = "Secondaryerror";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AreaMomentsOutput_gyration_g extends ResthopperParameter {

	public name: string = "Gyration";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
