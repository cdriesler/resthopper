import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TwoByFourJam extends ResthopperComponent {

	public guid: string = "c21e7bd5-b1f2-4448-ac56-206f98f90aa7";
	public name: string = "TwoByFourJam";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Jam a two-by-four into a crooked room";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Curve Components";

	public input:
	{
		"room_r": TwoByFourJamInput_room_r,
		"width_w": TwoByFourJamInput_width_w,
		"samples_s": TwoByFourJamInput_samples_s,
	}

	public output:
	{
		"rectangle_r": TwoByFourJamOutput_rectangle_r,
	}

	constructor() {
		super();
		this.input = {
			"room_r": new TwoByFourJamInput_room_r(),
			"width_w": new TwoByFourJamInput_width_w(),
			"samples_s": new TwoByFourJamInput_samples_s(),
		}
		this.output = {
			"rectangle_r": new TwoByFourJamOutput_rectangle_r(),
		}
	}

}

class TwoByFourJamInput_room_r extends ResthopperParameter {

	public name: string = "Room";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwoByFourJamInput_width_w extends ResthopperParameter {

	public name: string = "Width";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwoByFourJamInput_samples_s extends ResthopperParameter {

	public name: string = "Samples";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwoByFourJamOutput_rectangle_r extends ResthopperParameter {

	public name: string = "Rectangle";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
