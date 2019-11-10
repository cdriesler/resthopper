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
		"Surface_S": DimensionsInput_Surface_S,
	}

	public output:
	{
		"Udimension_U": DimensionsOutput_Udimension_U,
		"Vdimension_V": DimensionsOutput_Vdimension_V,
	}

	constructor() {
		super();
		this.input = {
			"Surface_S": new DimensionsInput_Surface_S(),
		}
		this.output = {
			"Udimension_U": new DimensionsOutput_Udimension_U(),
			"Vdimension_V": new DimensionsOutput_Vdimension_V(),
		}
	}

}

class DimensionsInput_Surface_S extends ResthopperParameter {

	public name: string = "Surface";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DimensionsOutput_Udimension_U extends ResthopperParameter {

	public name: string = "Udimension";
	public nickName: string = "U";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DimensionsOutput_Vdimension_V extends ResthopperParameter {

	public name: string = "Vdimension";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
