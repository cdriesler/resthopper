import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Dimensions extends ResthopperComponent {

	public guid: string = "f241e42e-8983-4ed3-b869-621c07630b00";
	public name: string = "Dimensions";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Get the approximate dimensions of a surface";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"surface_s": DimensionsInput_surface_s,
	}

	public output:
	{
		"udimension_u": DimensionsOutput_udimension_u,
		"vdimension_v": DimensionsOutput_vdimension_v,
	}

	constructor() {
		super();
		this.input = {
			"surface_s": new DimensionsInput_surface_s(),
		}
		this.output = {
			"udimension_u": new DimensionsOutput_udimension_u(),
			"vdimension_v": new DimensionsOutput_vdimension_v(),
		}
	}

}

class DimensionsInput_surface_s extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DimensionsOutput_udimension_u extends ResthopperParameter {

	public name: string = "Udimension";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DimensionsOutput_vdimension_v extends ResthopperParameter {

	public name: string = "Vdimension";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
