import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Area extends ResthopperComponent {

	public guid: string = "2e205f24-9279-47b2-b414-d06dcd0b21a7";
	public name: string = "Area";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Solve area properties for breps, meshes and planar closed curves.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"geometry_g": AreaInput_geometry_g,
	}

	public output:
	{
		"area_a": AreaOutput_area_a,
		"centroid_c": AreaOutput_centroid_c,
	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new AreaInput_geometry_g(),
		}
		this.output = {
			"area_a": new AreaOutput_area_a(),
			"centroid_c": new AreaOutput_centroid_c(),
		}
	}

}

class AreaInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AreaOutput_area_a extends ResthopperParameter {

	public name: string = "Area";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AreaOutput_centroid_c extends ResthopperParameter {

	public name: string = "Centroid";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
