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
		"Region_R": PopulateThreeDInput_Region_R,
		"Count_N": PopulateThreeDInput_Count_N,
		"Seed_S": PopulateThreeDInput_Seed_S,
		"Points_P": PopulateThreeDInput_Points_P,
	}

	public output:
	{
		"Population_P": PopulateThreeDOutput_Population_P,
	}

	constructor() {
		super();
		this.input = {
			"Region_R": new PopulateThreeDInput_Region_R(),
			"Count_N": new PopulateThreeDInput_Count_N(),
			"Seed_S": new PopulateThreeDInput_Seed_S(),
			"Points_P": new PopulateThreeDInput_Points_P(),
		}
		this.output = {
			"Population_P": new PopulateThreeDOutput_Population_P(),
		}
	}

}

class PopulateThreeDInput_Region_R extends ResthopperParameter {

	public name: string = "Region";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateThreeDInput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateThreeDInput_Seed_S extends ResthopperParameter {

	public name: string = "Seed";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateThreeDInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateThreeDOutput_Population_P extends ResthopperParameter {

	public name: string = "Population";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
