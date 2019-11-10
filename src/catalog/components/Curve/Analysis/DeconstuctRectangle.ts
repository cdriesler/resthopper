import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstuctRectangle extends ResthopperComponent {

	public guid: string = "e5c33a79-53d5-4f2b-9a97-d3d45c780edc";
	public name: string = "DeconstuctRectangle";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Retrieve the base plane and side intervals of a rectangle.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"Rectangle_R": DeconstuctRectangleInput_Rectangle_R,
	}

	public output:
	{
		"BasePlane_B": DeconstuctRectangleOutput_BasePlane_B,
		"XInterval_X": DeconstuctRectangleOutput_XInterval_X,
		"YInterval_Y": DeconstuctRectangleOutput_YInterval_Y,
	}

	constructor() {
		super();
		this.input = {
			"Rectangle_R": new DeconstuctRectangleInput_Rectangle_R(),
		}
		this.output = {
			"BasePlane_B": new DeconstuctRectangleOutput_BasePlane_B(),
			"XInterval_X": new DeconstuctRectangleOutput_XInterval_X(),
			"YInterval_Y": new DeconstuctRectangleOutput_YInterval_Y(),
		}
	}

}

class DeconstuctRectangleInput_Rectangle_R extends ResthopperParameter {

	public name: string = "Rectangle";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstuctRectangleOutput_BasePlane_B extends ResthopperParameter {

	public name: string = "BasePlane";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstuctRectangleOutput_XInterval_X extends ResthopperParameter {

	public name: string = "XInterval";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DeconstuctRectangleOutput_YInterval_Y extends ResthopperParameter {

	public name: string = "YInterval";
	public nickName: string = "Y";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
