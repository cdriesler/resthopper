import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PopulateGeometry extends ResthopperComponent {

	public guid: string = "c8cb6a5c-2ffd-4095-ba2a-5c35015e09e4";
	public name: string = "PopulateGeometry";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "Populate generic geometry with points";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Geometry_G": PopulateGeometryInput_Geometry_G,
		"Count_N": PopulateGeometryInput_Count_N,
		"Seed_S": PopulateGeometryInput_Seed_S,
		"Points_P": PopulateGeometryInput_Points_P,
	}

	public output:
	{
		"Population_P": PopulateGeometryOutput_Population_P,
	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new PopulateGeometryInput_Geometry_G(),
			"Count_N": new PopulateGeometryInput_Count_N(),
			"Seed_S": new PopulateGeometryInput_Seed_S(),
			"Points_P": new PopulateGeometryInput_Points_P(),
		}
		this.output = {
			"Population_P": new PopulateGeometryOutput_Population_P(),
		}
	}

}

class PopulateGeometryInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateGeometryInput_Count_N extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateGeometryInput_Seed_S extends ResthopperParameter {

	public name: string = "Seed";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateGeometryInput_Points_P extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public isOptional: boolean = true;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateGeometryOutput_Population_P extends ResthopperParameter {

	public name: string = "Population";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
