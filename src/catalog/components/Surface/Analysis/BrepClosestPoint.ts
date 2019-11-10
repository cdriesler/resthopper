import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BrepClosestPoint extends ResthopperComponent {

	public guid: string = "4beead95-8aa2-4613-8bb9-24758a0f5c4c";
	public name: string = "BrepClosestPoint";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Find the closest point on a brep";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Point_P": BrepClosestPointInput_Point_P,
		"Brep_B": BrepClosestPointInput_Brep_B,
	}

	public output:
	{
		"Point_P": BrepClosestPointOutput_Point_P,
		"Normal_N": BrepClosestPointOutput_Normal_N,
		"Distance_D": BrepClosestPointOutput_Distance_D,
	}

	constructor() {
		super();
		this.input = {
			"Point_P": new BrepClosestPointInput_Point_P(),
			"Brep_B": new BrepClosestPointInput_Brep_B(),
		}
		this.output = {
			"Point_P": new BrepClosestPointOutput_Point_P(),
			"Normal_N": new BrepClosestPointOutput_Normal_N(),
			"Distance_D": new BrepClosestPointOutput_Distance_D(),
		}
	}

}

class BrepClosestPointInput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepClosestPointInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepClosestPointOutput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepClosestPointOutput_Normal_N extends ResthopperParameter {

	public name: string = "Normal";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepClosestPointOutput_Distance_D extends ResthopperParameter {

	public name: string = "Distance";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
