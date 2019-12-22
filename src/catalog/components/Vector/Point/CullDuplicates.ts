import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CullDuplicates extends ResthopperComponent {

	public guid: string = "6eaffbb2-3392-441a-8556-2dc126aa8910";
	public name: string = "Cull Duplicates";
	public nickName: string = "CullPt";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Cull points that are coincident within tolerance";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"points_p": CullDuplicatesInput_points_p,
		"tolerance_t": CullDuplicatesInput_tolerance_t,
	}

	public output:
	{
		"points_p": CullDuplicatesOutput_points_p,
		"indices_i": CullDuplicatesOutput_indices_i,
		"valence_v": CullDuplicatesOutput_valence_v,
	}

	constructor() {
		super();
		this.input = {
			"points_p": new CullDuplicatesInput_points_p(),
			"tolerance_t": new CullDuplicatesInput_tolerance_t(),
		}
		this.output = {
			"points_p": new CullDuplicatesOutput_points_p(),
			"indices_i": new CullDuplicatesOutput_indices_i(),
			"valence_v": new CullDuplicatesOutput_valence_v(),
		}
	}

}

class CullDuplicatesInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullDuplicatesInput_tolerance_t extends ResthopperParameter {

	public name: string = "Tolerance";
	public nickName: string = "T";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullDuplicatesOutput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullDuplicatesOutput_indices_i extends ResthopperParameter {

	public name: string = "Indices";
	public nickName: string = "I";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CullDuplicatesOutput_valence_v extends ResthopperParameter {

	public name: string = "Valence";
	public nickName: string = "V";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
