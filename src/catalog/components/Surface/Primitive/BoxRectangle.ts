import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoxRectangle extends ResthopperComponent {

	public guid: string = "d0a56c9e-2483-45e7-ab98-a450b97f1bc0";
	public name: string = "BoxRectangle";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a box defined by a rectangle and a height.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Rectangle_R": BoxRectangleInput_Rectangle_R,
		"Height_H": BoxRectangleInput_Height_H,
	}

	public output:
	{
		"Box_B": BoxRectangleOutput_Box_B,
	}

	constructor() {
		super();
		this.input = {
			"Rectangle_R": new BoxRectangleInput_Rectangle_R(),
			"Height_H": new BoxRectangleInput_Height_H(),
		}
		this.output = {
			"Box_B": new BoxRectangleOutput_Box_B(),
		}
	}

}

class BoxRectangleInput_Rectangle_R extends ResthopperParameter {

	public name: string = "Rectangle";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxRectangleInput_Height_H extends ResthopperParameter {

	public name: string = "Height";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxRectangleOutput_Box_B extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
