import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Exposure extends ResthopperComponent {

	public guid: string = "a78e3fbc-d199-4bd9-8df0-fc4c2743eb31";
	public name: string = "Exposure";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Solve mesh exposure for a collection of energy rays and obstructions.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"shape_s": ExposureInput_shape_s,
		"obstructions_o": ExposureInput_obstructions_o,
		"rays_r": ExposureInput_rays_r,
		"energy_e": ExposureInput_energy_e,
		"lambert_l": ExposureInput_lambert_l,
	}

	public output:
	{
		"exposure_e": ExposureOutput_exposure_e,
		"range_r": ExposureOutput_range_r,
	}

	constructor() {
		super();
		this.input = {
			"shape_s": new ExposureInput_shape_s(),
			"obstructions_o": new ExposureInput_obstructions_o(),
			"rays_r": new ExposureInput_rays_r(),
			"energy_e": new ExposureInput_energy_e(),
			"lambert_l": new ExposureInput_lambert_l(),
		}
		this.output = {
			"exposure_e": new ExposureOutput_exposure_e(),
			"range_r": new ExposureOutput_range_r(),
		}
	}

}

class ExposureInput_shape_s extends ResthopperParameter {

	public name: string = "Shape";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExposureInput_obstructions_o extends ResthopperParameter {

	public name: string = "Obstructions";
	public nickName: string = "O";
	public isOptional: boolean = true;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExposureInput_rays_r extends ResthopperParameter {

	public name: string = "Rays";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExposureInput_energy_e extends ResthopperParameter {

	public name: string = "Energy";
	public nickName: string = "E";
	public isOptional: boolean = true;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExposureInput_lambert_l extends ResthopperParameter {

	public name: string = "Lambert";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExposureOutput_exposure_e extends ResthopperParameter {

	public name: string = "Exposure";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExposureOutput_range_r extends ResthopperParameter {

	public name: string = "Range";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
