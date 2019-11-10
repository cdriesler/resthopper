import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PopulateThreeD extends ResthopperComponent {

	public guid: string = "e202025b-dc8e-4c51-ae19-4415b172886f";
	public name: string = "Populate3D";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "Populate a 3-Dimensional region with points";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"region_r": PopulateThreeDInput_region_r,
		"count_n": PopulateThreeDInput_count_n,
		"seed_s": PopulateThreeDInput_seed_s,
		"points_p": PopulateThreeDInput_points_p,
	}

	public output:
	{
		"population_p": PopulateThreeDOutput_population_p,
	}

	constructor() {
		super();
		this.input = {
			"region_r": new PopulateThreeDInput_region_r(),
			"count_n": new PopulateThreeDInput_count_n(),
			"seed_s": new PopulateThreeDInput_seed_s(),
			"points_p": new PopulateThreeDInput_points_p(),
		}
		this.output = {
			"population_p": new PopulateThreeDOutput_population_p(),
		}
	}

}

class PopulateThreeDInput_region_r extends ResthopperParameter {

	public name: string = "Region";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateThreeDInput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateThreeDInput_seed_s extends ResthopperParameter {

	public name: string = "Seed";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateThreeDInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateThreeDOutput_population_p extends ResthopperParameter {

	public name: string = "Population";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
