import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class UnitVector extends ResthopperComponent {

	public guid: string = "d2da1306-259a-4994-85a4-672d8a4c7805";
	public name: string = "Unit Vector";
	public nickName: string = "Unit";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Unitize vector.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"vector_v": UnitVectorInput_vector_v,
	}

	public output:
	{
		"vector_v": UnitVectorOutput_vector_v,
	}

	constructor() {
		super();
		this.input = {
			"vector_v": new UnitVectorInput_vector_v(),
		}
		this.output = {
			"vector_v": new UnitVectorOutput_vector_v(),
		}
	}

}

class UnitVectorInput_vector_v extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public description: string = "Base vector"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class UnitVectorOutput_vector_v extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public description: string = "Unit vector"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
