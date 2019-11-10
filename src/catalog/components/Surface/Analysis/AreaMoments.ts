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
		"Geometry_G": AreaMomentsInput_Geometry_G,
	}

	public output:
	{
		"Area_A": AreaMomentsOutput_Area_A,
		"Centroid_C": AreaMomentsOutput_Centroid_C,
		"Inertiaerror_I": AreaMomentsOutput_Inertiaerror_I,
		"Secondaryerror_S": AreaMomentsOutput_Secondaryerror_S,
		"Gyration_G": AreaMomentsOutput_Gyration_G,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new AreaMomentsInput_Geometry_G(),
		}
		this.output = {
			"Area_A": new AreaMomentsOutput_Area_A(),
			"Centroid_C": new AreaMomentsOutput_Centroid_C(),
			"Inertiaerror_I": new AreaMomentsOutput_Inertiaerror_I(),
			"Secondaryerror_S": new AreaMomentsOutput_Secondaryerror_S(),
			"Gyration_G": new AreaMomentsOutput_Gyration_G(),
		}
	}

}

class AreaMomentsInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AreaMomentsOutput_Area_A extends ResthopperParameter {

	public name: string = "Area";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AreaMomentsOutput_Centroid_C extends ResthopperParameter {

	public name: string = "Centroid";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AreaMomentsOutput_Inertiaerror_I extends ResthopperParameter {

	public name: string = "Inertiaerror";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AreaMomentsOutput_Secondaryerror_S extends ResthopperParameter {

	public name: string = "Secondaryerror";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AreaMomentsOutput_Gyration_G extends ResthopperParameter {

	public name: string = "Gyration";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
