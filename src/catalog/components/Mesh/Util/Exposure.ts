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
		"Shape_S": ExposureInput_Shape_S,
		"Obstructions_O": ExposureInput_Obstructions_O,
		"Rays_R": ExposureInput_Rays_R,
		"Energy_E": ExposureInput_Energy_E,
		"Lambert_L": ExposureInput_Lambert_L,
	}

	public output:
	{
		"Exposure_E": ExposureOutput_Exposure_E,
		"Range_R": ExposureOutput_Range_R,
	}

	constructor() {
		super();
		this.input = {
			"Shape_S": new ExposureInput_Shape_S(),
			"Obstructions_O": new ExposureInput_Obstructions_O(),
			"Rays_R": new ExposureInput_Rays_R(),
			"Energy_E": new ExposureInput_Energy_E(),
			"Lambert_L": new ExposureInput_Lambert_L(),
		}
		this.output = {
			"Exposure_E": new ExposureOutput_Exposure_E(),
			"Range_R": new ExposureOutput_Range_R(),
		}
	}

}

class ExposureInput_Shape_S extends ResthopperParameter {

	public name: string = "Shape";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExposureInput_Obstructions_O extends ResthopperParameter {

	public name: string = "Obstructions";
	public nickName: string = "O";
	public isOptional: boolean = true;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExposureInput_Rays_R extends ResthopperParameter {

	public name: string = "Rays";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExposureInput_Energy_E extends ResthopperParameter {

	public name: string = "Energy";
	public nickName: string = "E";
	public isOptional: boolean = true;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExposureInput_Lambert_L extends ResthopperParameter {

	public name: string = "Lambert";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExposureOutput_Exposure_E extends ResthopperParameter {

	public name: string = "Exposure";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ExposureOutput_Range_R extends ResthopperParameter {

	public name: string = "Range";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
