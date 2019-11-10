import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CollisionManyMany extends ResthopperComponent {

	public guid: string = "2168853c-acd8-4a63-9c9b-ecde9e239eae";
	public name: string = "CollisionManyMany";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Test for many|many collision between objects";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Colliders_C": CollisionManyManyInput_Colliders_C,
	}

	public output:
	{
		"Collision_C": CollisionManyManyOutput_Collision_C,
		"Indices_I": CollisionManyManyOutput_Indices_I,
	}

	constructor() {
		super();
		this.input = {
			"Colliders_C": new CollisionManyManyInput_Colliders_C(),
		}
		this.output = {
			"Collision_C": new CollisionManyManyOutput_Collision_C(),
			"Indices_I": new CollisionManyManyOutput_Indices_I(),
		}
	}

}

class CollisionManyManyInput_Colliders_C extends ResthopperParameter {

	public name: string = "Colliders";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CollisionManyManyOutput_Collision_C extends ResthopperParameter {

	public name: string = "Collision";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CollisionManyManyOutput_Indices_I extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
