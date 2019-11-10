import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CullDuplicates extends ResthopperComponent {

	public guid: string = "6eaffbb2-3392-441a-8556-2dc126aa8910";
	public name: string = "CullDuplicates";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Cull points that are coincident within tolerance";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Points_P": CullDuplicatesInput_Points_P,
		"Tolerance_T": CullDuplicatesInput_Tolerance_T,
	}

	public output:
	{
		"Points_P": CullDuplicatesOutput_Points_P,
		"Indices_I": CullDuplicatesOutput_Indices_I,
		"Valence_V": CullDuplicatesOutput_Valence_V,
	}

	constructor() {
		super();
		this.input = {
			"Points_P": new CullDuplicatesInput_Points_P(),
			"Tolerance_T": new CullDuplicatesInput_Tolerance_T(),
		}
		this.output = {
			"Points_P": new CullDuplicatesOutput_Points_P(),
			"Indices_I": new CullDuplicatesOutput_Indices_I(),
			"Valence_V": new CullDuplicatesOutput_Valence_V(),
		}
	}

}

class CullDuplicatesInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullDuplicatesInput_Tolerance_T extends ResthopperParameter {

	public name: string = "Tolerance";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullDuplicatesOutput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullDuplicatesOutput_Indices_I extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullDuplicatesOutput_Valence_V extends ResthopperParameter {

	public name: string = "Valence";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
