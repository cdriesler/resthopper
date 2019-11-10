import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ShapeInBrep extends ResthopperComponent {

	public guid: string = "2ba64356-be21-4c12-bbd4-ced54f04c8ef";
	public name: string = "ShapeInBrep";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Tests whether a shape is inside a brep";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Brep_B": ShapeInBrepInput_Brep_B,
		"Shape_S": ShapeInBrepInput_Shape_S,
	}

	public output:
	{
		"Relation_R": ShapeInBrepOutput_Relation_R,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new ShapeInBrepInput_Brep_B(),
			"Shape_S": new ShapeInBrepInput_Shape_S(),
		}
		this.output = {
			"Relation_R": new ShapeInBrepOutput_Relation_R(),
		}
	}

}

class ShapeInBrepInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShapeInBrepInput_Shape_S extends ResthopperParameter {

	public name: string = "Shape";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShapeInBrepOutput_Relation_R extends ResthopperParameter {

	public name: string = "Relation";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
