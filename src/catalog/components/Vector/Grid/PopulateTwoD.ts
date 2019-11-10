import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PopulateTwoD extends ResthopperComponent {

	public guid: string = "e2d958e8-9f08-44f7-bf47-a684882d0b2a";
	public name: string = "Populate2D";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "Populate a 2-Dimensional region with points";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Region_R": PopulateTwoDInput_Region_R,
		"Count_N": PopulateTwoDInput_Count_N,
		"Seed_S": PopulateTwoDInput_Seed_S,
		"Points_P": PopulateTwoDInput_Points_P,
	}

	public output:
	{
		"Population_P": PopulateTwoDOutput_Population_P,
	}

	constructor() {
		super();
		this.input = {
			"Region_R": new PopulateTwoDInput_Region_R(),
			"Count_N": new PopulateTwoDInput_Count_N(),
			"Seed_S": new PopulateTwoDInput_Seed_S(),
			"Points_P": new PopulateTwoDInput_Points_P(),
		}
		this.output = {
			"Population_P": new PopulateTwoDOutput_Population_P(),
		}
	}

}

class PopulateTwoDInput_Region_R extends ResthopperParameter {

	public name: string = "Region";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateTwoDInput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateTwoDInput_Seed_S extends ResthopperParameter {

	public name: string = "Seed";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateTwoDInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateTwoDOutput_Population_P extends ResthopperParameter {

	public name: string = "Population";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
