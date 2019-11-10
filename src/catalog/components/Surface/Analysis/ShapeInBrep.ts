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
		"brep_b": ShapeInBrepInput_brep_b,
		"shape_s": ShapeInBrepInput_shape_s,
	}

	public output:
	{
		"relation_r": ShapeInBrepOutput_relation_r,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new ShapeInBrepInput_brep_b(),
			"shape_s": new ShapeInBrepInput_shape_s(),
		}
		this.output = {
			"relation_r": new ShapeInBrepOutput_relation_r(),
		}
	}

}

class ShapeInBrepInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShapeInBrepInput_shape_s extends ResthopperParameter {

	public name: string = "Shape";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ShapeInBrepOutput_relation_r extends ResthopperParameter {

	public name: string = "Relation";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
