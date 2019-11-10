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

	public library: string = "Curve Components";

	public input:
	{
		"Room_R": TwoByFourJamInput_Room_R,
		"Width_W": TwoByFourJamInput_Width_W,
		"Samples_S": TwoByFourJamInput_Samples_S,
	}

	public output:
	{
		"Rectangle_R": TwoByFourJamOutput_Rectangle_R,
	}

	constructor() {
		super();
		this.input = {
			"Room_R": new TwoByFourJamInput_Room_R(),
			"Width_W": new TwoByFourJamInput_Width_W(),
			"Samples_S": new TwoByFourJamInput_Samples_S(),
		}
		this.output = {
			"Rectangle_R": new TwoByFourJamOutput_Rectangle_R(),
		}
	}

}

class TwoByFourJamInput_Room_R extends ResthopperParameter {

	public name: string = "Room";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwoByFourJamInput_Width_W extends ResthopperParameter {

	public name: string = "Width";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwoByFourJamInput_Samples_S extends ResthopperParameter {

	public name: string = "Samples";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TwoByFourJamOutput_Rectangle_R extends ResthopperParameter {

	public name: string = "Rectangle";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
