import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class QuadTree extends ResthopperComponent {

	public guid: string = "8102032b-9699-4949-ab12-3017a31d1062";
	public name: string = "QuadTree";
	public nickName: string = "QT";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "A two-dimensional quadtree structure";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Triangulation Components";

	public input:
	{
		"points_p": QuadTreeInput_points_p,
		"plane_pl": QuadTreeInput_plane_pl,
		"square_s": QuadTreeInput_square_s,
		"group_g": QuadTreeInput_group_g,
	}

	public output:
	{
		"quads_q": QuadTreeOutput_quads_q,
		"points_p": QuadTreeOutput_points_p,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new QuadTreeInput_points_p(),
			"plane_pl": new QuadTreeInput_plane_pl(),
			"square_s": new QuadTreeInput_square_s(),
			"group_g": new QuadTreeInput_group_g(),
		}
		this.output = {
			"quads_q": new QuadTreeOutput_quads_q(),
			"points_p": new QuadTreeOutput_points_p(),
		}
	}

}

class QuadTreeInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadTreeInput_plane_pl extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "Pl";
	public isOptional: boolean = true;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadTreeInput_square_s extends ResthopperParameter {

	public name: string = "Square";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadTreeInput_group_g extends ResthopperParameter {

	public name: string = "Group";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadTreeOutput_quads_q extends ResthopperParameter {

	public name: string = "Quads";
	public nickName: string = "Q";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadTreeOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
