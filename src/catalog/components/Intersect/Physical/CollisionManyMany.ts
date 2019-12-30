import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CollisionManyMany extends ResthopperComponent {

	public guid: string = "2168853c-acd8-4a63-9c9b-ecde9e239eae";
	public name: string = "Collision Many|Many";
	public nickName: string = "ColMM";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Test for many|many collision between objects";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"colliders_c": CollisionManyManyInput_colliders_c,
	}

	public output:
	{
		"collision_c": CollisionManyManyOutput_collision_c,
		"indices_i": CollisionManyManyOutput_indices_i,
	}

	constructor() {
		super();
		this.input = {
			"colliders_c": new CollisionManyManyInput_colliders_c(),
		}
		this.output = {
			"collision_c": new CollisionManyManyOutput_collision_c(),
			"indices_i": new CollisionManyManyOutput_indices_i(),
		}
	}

}

class CollisionManyManyInput_colliders_c extends ResthopperParameter {

	public name: string = "Colliders";
	public nickName: string = "C";
	public description: string = "Objects for collision"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CollisionManyManyOutput_collision_c extends ResthopperParameter {

	public name: string = "Collision";
	public nickName: string = "C";
	public description: string = "True if object at this index collides with any of the other objects"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CollisionManyManyOutput_indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public description: string = "Index of object in set which collided with the object at this index"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
