import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Sphere extends ResthopperComponent {

	public guid: string = "dabc854d-f50e-408a-b001-d043c7de151d";
	public name: string = "Sphere";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a spherical surface.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Base_B": SphereInput_Base_B,
		"Radius_R": SphereInput_Radius_R,
	}

	public output:
	{
		"Sphere_S": SphereOutput_Sphere_S,
	}

	constructor() {
		super();
		this.input = {
			"Base_B": new SphereInput_Base_B(),
			"Radius_R": new SphereInput_Radius_R(),
		}
		this.output = {
			"Sphere_S": new SphereOutput_Sphere_S(),
		}
	}

}

class SphereInput_Base_B extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereInput_Radius_R extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereOutput_Sphere_S extends ResthopperParameter {

	public name: string = "Sphere";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
