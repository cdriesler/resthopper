import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class QuadSphere extends ResthopperComponent {

	public guid: string = "361790d6-9d66-4808-8c5a-8de9c218c227";
	public name: string = "QuadSphere";
	public nickName: string = "QSph";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a spherical brep made from quad nurbs patches.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"base_b": QuadSphereInput_base_b,
		"radius_r": QuadSphereInput_radius_r,
	}

	public output:
	{
		"sphere_s": QuadSphereOutput_sphere_s,
	}

	constructor() {
		super();
		this.input = {
			"base_b": new QuadSphereInput_base_b(),
			"radius_r": new QuadSphereInput_radius_r(),
		}
		this.output = {
			"sphere_s": new QuadSphereOutput_sphere_s(),
		}
	}

}

class QuadSphereInput_base_b extends ResthopperParameter {

	public name: string = "Base";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadSphereInput_radius_r extends ResthopperParameter {

	public name: string = "Radius";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadSphereOutput_sphere_s extends ResthopperParameter {

	public name: string = "Sphere";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
