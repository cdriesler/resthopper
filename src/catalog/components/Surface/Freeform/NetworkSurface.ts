import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class NetworkSurface extends ResthopperComponent {

	public guid: string = "71506fa8-9bf0-432d-b897-b2e0c5ac316c";
	public name: string = "NetworkSurface";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a surface from curve networks";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"CurvesU_U": NetworkSurfaceInput_CurvesU_U,
		"CurvesV_V": NetworkSurfaceInput_CurvesV_V,
		"Continuity_C": NetworkSurfaceInput_Continuity_C,
	}

	public output:
	{
		"Surface_S": NetworkSurfaceOutput_Surface_S,
	}

	constructor() {
		super();
		this.input = {
			"CurvesU_U": new NetworkSurfaceInput_CurvesU_U(),
			"CurvesV_V": new NetworkSurfaceInput_CurvesV_V(),
			"Continuity_C": new NetworkSurfaceInput_Continuity_C(),
		}
		this.output = {
			"Surface_S": new NetworkSurfaceOutput_Surface_S(),
		}
	}

}

class NetworkSurfaceInput_CurvesU_U extends ResthopperParameter {

	public name: string = "CurvesU";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NetworkSurfaceInput_CurvesV_V extends ResthopperParameter {

	public name: string = "CurvesV";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NetworkSurfaceInput_Continuity_C extends ResthopperParameter {

	public name: string = "Continuity";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class NetworkSurfaceOutput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
