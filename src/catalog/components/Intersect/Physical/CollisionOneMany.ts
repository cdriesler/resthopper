import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CollisionOneMany extends ResthopperComponent {

	public guid: string = "bb6c6501-0500-4678-859b-b838348981d1";
	public name: string = "CollisionOneMany";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Test for one|many collision between objects";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Collider_C": CollisionOneManyInput_Collider_C,
		"Obstacles_O": CollisionOneManyInput_Obstacles_O,
	}

	public output:
	{
		"Collision_C": CollisionOneManyOutput_Collision_C,
		"Index_I": CollisionOneManyOutput_Index_I,
	}

	constructor() {
		super();
		this.input = {
			"Collider_C": new CollisionOneManyInput_Collider_C(),
			"Obstacles_O": new CollisionOneManyInput_Obstacles_O(),
		}
		this.output = {
			"Collision_C": new CollisionOneManyOutput_Collision_C(),
			"Index_I": new CollisionOneManyOutput_Index_I(),
		}
	}

}

class CollisionOneManyInput_Collider_C extends ResthopperParameter {

	public name: string = "Collider";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CollisionOneManyInput_Obstacles_O extends ResthopperParameter {

	public name: string = "Obstacles";
	public nickName: string = "O";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CollisionOneManyOutput_Collision_C extends ResthopperParameter {

	public name: string = "Collision";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CollisionOneManyOutput_Index_I extends ResthopperParameter {

	public name: string = "Index";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
