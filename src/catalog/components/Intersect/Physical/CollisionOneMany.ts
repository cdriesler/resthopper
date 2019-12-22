import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CollisionOneMany extends ResthopperComponent {

	public guid: string = "bb6c6501-0500-4678-859b-b838348981d1";
	public name: string = "Collision One|Many";
	public nickName: string = "ColOM";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Test for one|many collision between objects";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"collider_c": CollisionOneManyInput_collider_c,
		"obstacles_o": CollisionOneManyInput_obstacles_o,
	}

	public output:
	{
		"collision_c": CollisionOneManyOutput_collision_c,
		"index_i": CollisionOneManyOutput_index_i,
	}

	constructor() {
		super();
		this.input = {
			"collider_c": new CollisionOneManyInput_collider_c(),
			"obstacles_o": new CollisionOneManyInput_obstacles_o(),
		}
		this.output = {
			"collision_c": new CollisionOneManyOutput_collision_c(),
			"index_i": new CollisionOneManyOutput_index_i(),
		}
	}

}

class CollisionOneManyInput_collider_c extends ResthopperParameter {

	public name: string = "Collider";
	public nickName: string = "C";
	public description: string = "Empty Geometry parameter"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CollisionOneManyInput_obstacles_o extends ResthopperParameter {

	public name: string = "Obstacles";
	public nickName: string = "O";
	public description: string = "Empty Geometry parameter"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CollisionOneManyOutput_collision_c extends ResthopperParameter {

	public name: string = "Collision";
	public nickName: string = "C";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CollisionOneManyOutput_index_i extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
