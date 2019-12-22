import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoundingBox extends ResthopperComponent {

	public guid: string = "0bb3d234-9097-45db-9998-621639c87d3b";
	public name: string = "Bounding Box";
	public nickName: string = "BBox";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Solve oriented geometry bounding boxes.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"content_c": BoundingBoxInput_content_c,
		"plane_p": BoundingBoxInput_plane_p,
	}

	public output:
	{
		"box_b": BoundingBoxOutput_box_b,
	}

	constructor() {
		super();
		this.input = {
			"content_c": new BoundingBoxInput_content_c(),
			"plane_p": new BoundingBoxInput_plane_p(),
		}
		this.output = {
			"box_b": new BoundingBoxOutput_box_b(),
		}
	}

}

class BoundingBoxInput_content_c extends ResthopperParameter {

	public name: string = "Content";
	public nickName: string = "C";
	public description: string = "Empty Geometry parameter"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoundingBoxInput_plane_p extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public description: string = "Empty Plane parameter"
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoundingBoxOutput_box_b extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public description: string = "Empty Box parameter"
	public isOptional: boolean = false;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
