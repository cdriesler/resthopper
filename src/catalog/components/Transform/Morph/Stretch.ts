import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Stretch extends ResthopperComponent {

	public guid: string = "2a27f87c-61c5-47c2-a0b7-7863f31a3594";
	public name: string = "Stretch";
	public nickName: string = "Stretch";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Deforms objects by stretching them along a finite axis.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"geometry_g": StretchInput_geometry_g,
		"axis_x": StretchInput_axis_x,
		"length_l": StretchInput_length_l,
		"rigid_r": StretchInput_rigid_r,
	}

	public output:
	{
		"geometry_g": StretchOutput_geometry_g,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new StretchInput_geometry_g(),
			"axis_x": new StretchInput_axis_x(),
			"length_l": new StretchInput_length_l(),
			"rigid_r": new StretchInput_rigid_r(),
		}
		this.output = {
			"geometry_g": new StretchOutput_geometry_g(),
		}
	}

}

class StretchInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Empty Geometry parameter"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StretchInput_axis_x extends ResthopperParameter {

	public name: string = "Axis";
	public nickName: string = "X";
	public description: string = "Empty Line parameter"
	public isOptional: boolean = false;
	public typeName: string = "Line"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StretchInput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StretchInput_rigid_r extends ResthopperParameter {

	public name: string = "Rigid";
	public nickName: string = "R";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class StretchOutput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Empty Geometry parameter"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
