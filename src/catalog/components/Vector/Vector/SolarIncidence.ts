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
		"location_l": SolarIncidenceInput_location_l,
		"time_t": SolarIncidenceInput_time_t,
		"orientation_p": SolarIncidenceInput_orientation_p,
	}

	public output:
	{
		"direction_d": SolarIncidenceOutput_direction_d,
		"elevation_e": SolarIncidenceOutput_elevation_e,
		"horizon_h": SolarIncidenceOutput_horizon_h,
		"colour_c": SolarIncidenceOutput_colour_c,
	}

	constructor() {
		super();
		this.input = {
			"location_l": new SolarIncidenceInput_location_l(),
			"time_t": new SolarIncidenceInput_time_t(),
			"orientation_p": new SolarIncidenceInput_orientation_p(),
		}
		this.output = {
			"direction_d": new SolarIncidenceOutput_direction_d(),
			"elevation_e": new SolarIncidenceOutput_elevation_e(),
			"horizon_h": new SolarIncidenceOutput_horizon_h(),
			"colour_c": new SolarIncidenceOutput_colour_c(),
		}
	}

}

class SolarIncidenceInput_location_l extends ResthopperParameter {

	public name: string = "Location";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Location"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolarIncidenceInput_time_t extends ResthopperParameter {

	public name: string = "Time";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Time"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolarIncidenceInput_orientation_p extends ResthopperParameter {

	public name: string = "Orientation";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Plane"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolarIncidenceOutput_direction_d extends ResthopperParameter {

	public name: string = "Direction";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolarIncidenceOutput_elevation_e extends ResthopperParameter {

	public name: string = "Elevation";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolarIncidenceOutput_horizon_h extends ResthopperParameter {

	public name: string = "Horizon";
	public nickName: string = "H";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SolarIncidenceOutput_colour_c extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
