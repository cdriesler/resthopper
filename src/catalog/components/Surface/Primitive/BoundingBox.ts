import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoundingBox extends ResthopperComponent {

	public guid: string = "0bb3d234-9097-45db-9998-621639c87d3b";
	public name: string = "BoundingBox";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Solve oriented geometry bounding boxes.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Content_C": BoundingBoxInput_Content_C,
		"Plane_P": BoundingBoxInput_Plane_P,
	}

	public output:
	{
		"Box_B": BoundingBoxOutput_Box_B,
	}

	constructor() {
		super();
		this.input = {
			"Content_C": new BoundingBoxInput_Content_C(),
			"Plane_P": new BoundingBoxInput_Plane_P(),
		}
		this.output = {
			"Box_B": new BoundingBoxOutput_Box_B(),
		}
	}

}

class BoundingBoxInput_Content_C extends ResthopperParameter {

	public name: string = "Content";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoundingBoxInput_Plane_P extends ResthopperParameter {

	public name: string = "Plane";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoundingBoxOutput_Box_B extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
