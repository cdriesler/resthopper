import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SolarIncidence extends ResthopperComponent {

	public guid: string = "59e1f848-38d4-4cbf-ad7f-40ffc52acdf5";
	public name: string = "SolarIncidence";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Gets the solar incidence vector for a certain time and place";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Location_L": SolarIncidenceInput_Location_L,
		"Time_T": SolarIncidenceInput_Time_T,
		"Orientation_P": SolarIncidenceInput_Orientation_P,
	}

	public output:
	{
		"Direction_D": SolarIncidenceOutput_Direction_D,
		"Elevation_E": SolarIncidenceOutput_Elevation_E,
		"Horizon_H": SolarIncidenceOutput_Horizon_H,
		"Colour_C": SolarIncidenceOutput_Colour_C,
	}

	constructor() {
		super();
		this.input = {
			"Location_L": new SolarIncidenceInput_Location_L(),
			"Time_T": new SolarIncidenceInput_Time_T(),
			"Orientation_P": new SolarIncidenceInput_Orientation_P(),
		}
		this.output = {
			"Direction_D": new SolarIncidenceOutput_Direction_D(),
			"Elevation_E": new SolarIncidenceOutput_Elevation_E(),
			"Horizon_H": new SolarIncidenceOutput_Horizon_H(),
			"Colour_C": new SolarIncidenceOutput_Colour_C(),
		}
	}

}

class SolarIncidenceInput_Location_L extends ResthopperParameter {

	public name: string = "Location";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Location;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolarIncidenceInput_Time_T extends ResthopperParameter {

	public name: string = "Time";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Time;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolarIncidenceInput_Orientation_P extends ResthopperParameter {

	public name: string = "Orientation";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolarIncidenceOutput_Direction_D extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolarIncidenceOutput_Elevation_E extends ResthopperParameter {

	public name: string = "Elevation";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolarIncidenceOutput_Horizon_H extends ResthopperParameter {

	public name: string = "Horizon";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolarIncidenceOutput_Colour_C extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
