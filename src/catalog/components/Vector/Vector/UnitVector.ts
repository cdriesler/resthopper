import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class UnitVector extends ResthopperComponent {

	public guid: string = "d2da1306-259a-4994-85a4-672d8a4c7805";
	public name: string = "UnitVector";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Unitize vector.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Vector_V": UnitVectorInput_Vector_V,
	}

	public output:
	{
		"Vector_V": UnitVectorOutput_Vector_V,
	}

	constructor() {
		super();
		this.input = {
			"Vector_V": new UnitVectorInput_Vector_V(),
		}
		this.output = {
			"Vector_V": new UnitVectorOutput_Vector_V(),
		}
	}

}

class UnitVectorInput_Vector_V extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UnitVectorOutput_Vector_V extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
