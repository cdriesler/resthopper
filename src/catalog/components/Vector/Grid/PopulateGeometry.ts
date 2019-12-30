import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PopulateGeometry extends ResthopperComponent {

	public guid: string = "c8cb6a5c-2ffd-4095-ba2a-5c35015e09e4";
	public name: string = "Populate Geometry";
	public nickName: string = "PopGeo";
	public category: string = "Vector";
	public subCategory: string = "Grid";
	public description: string = "Populate generic geometry with points";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"geometry_g": PopulateGeometryInput_geometry_g,
		"count_n": PopulateGeometryInput_count_n,
		"seed_s": PopulateGeometryInput_seed_s,
		"points_p": PopulateGeometryInput_points_p,
	}

	public output:
	{
		"population_p": PopulateGeometryOutput_population_p,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new PopulateGeometryInput_geometry_g(),
			"count_n": new PopulateGeometryInput_count_n(),
			"seed_s": new PopulateGeometryInput_seed_s(),
			"points_p": new PopulateGeometryInput_points_p(),
		}
		this.output = {
			"population_p": new PopulateGeometryOutput_population_p(),
		}
	}

}

class PopulateGeometryInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Geometry to populate (curves, surfaces, breps and meshes only)"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateGeometryInput_count_n extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "N";
	public description: string = "Number of points to add"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateGeometryInput_seed_s extends ResthopperParameter {

	public name: string = "Seed";
	public nickName: string = "S";
	public description: string = "Random seed for insertion"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateGeometryInput_points_p extends ResthopperParameter {

	public name: string = "Points";
	public nickName: string = "P";
	public description: string = "Optional pre-existing population"
	public isOptional: boolean = true;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PopulateGeometryOutput_population_p extends ResthopperParameter {

	public name: string = "Population";
	public nickName: string = "P";
	public description: string = "Population of inserted points"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
