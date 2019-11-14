import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PopulateTwoD extends ResthopperComponent {

	public guid: string = "e2d958e8-9f08-44f7-bf47-a684882d0b2a";
	public name: string = "Populate2D";
	public nickName: string = "Pop2D";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "Populate a 2-Dimensional region with points";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"region_r": PopulateTwoDInput_region_r,
		"count_n": PopulateTwoDInput_count_n,
		"seed_s": PopulateTwoDInput_seed_s,
		"points_p": PopulateTwoDInput_points_p,
	}

	public output:
	{
		"population_p": PopulateTwoDOutput_population_p,
	}

	constructor() {
		super();
		this.input = {
			"region_r": new PopulateTwoDInput_region_r(),
			"count_n": new PopulateTwoDInput_count_n(),
			"seed_s": new PopulateTwoDInput_seed_s(),
			"points_p": new PopulateTwoDInput_points_p(),
		}
		this.output = {
			"population_p": new PopulateTwoDOutput_population_p(),
		}
	}

}

class PopulateTwoDInput_region_r extends ResthopperParameter {

	public name: string = "Region";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateTwoDInput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateTwoDInput_seed_s extends ResthopperParameter {

	public name: string = "Seed";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateTwoDInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateTwoDOutput_population_p extends ResthopperParameter {

	public name: string = "Population";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
