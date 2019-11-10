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
		"base_b": SphereInput_base_b,
		"radius_r": SphereInput_radius_r,
	}

	public output:
	{
		"sphere_s": SphereOutput_sphere_s,
	}

	constructor() {
		super();
		this.input = {
			"base_b": new SphereInput_base_b(),
			"radius_r": new SphereInput_radius_r(),
		}
		this.output = {
			"sphere_s": new SphereOutput_sphere_s(),
		}
	}

}

class SphereInput_base_b extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SphereOutput_sphere_s extends ResthopperParameter {

	public name: string = "Sphere";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
