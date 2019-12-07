import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RegionSlits extends ResthopperComponent {

	public guid: string = "0feeeaca-8f1f-4d7c-a24a-8e7dd68604a2";
	public name: string = "RegionSlits";
	public nickName: string = "RSlits";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Add slits to a collection of intersecting planar regions";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"regions_r": RegionSlitsInput_regions_r,
		"width_w": RegionSlitsInput_width_w,
		"gap_g": RegionSlitsInput_gap_g,
	}

	public output:
	{
		"regions_r": RegionSlitsOutput_regions_r,
		"topology_t": RegionSlitsOutput_topology_t,
	}

	constructor() {
		super();
		this.input = {
			"regions_r": new RegionSlitsInput_regions_r(),
			"width_w": new RegionSlitsInput_width_w(),
			"gap_g": new RegionSlitsInput_gap_g(),
		}
		this.output = {
			"regions_r": new RegionSlitsOutput_regions_r(),
			"topology_t": new RegionSlitsOutput_topology_t(),
		}
	}

}

class RegionSlitsInput_regions_r extends ResthopperParameter {

	public name: string = "Regions";
	public nickName: string = "R";
	public description: string = "Empty Curve parameter"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionSlitsInput_width_w extends ResthopperParameter {

	public name: string = "Width";
	public nickName: string = "W";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionSlitsInput_gap_g extends ResthopperParameter {

	public name: string = "Gap";
	public nickName: string = "G";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionSlitsOutput_regions_r extends ResthopperParameter {

	public name: string = "Regions";
	public nickName: string = "R";
	public description: string = "Empty Surface parameter"
	public isOptional: boolean = false;
	public typeName: string = "Surface"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionSlitsOutput_topology_t extends ResthopperParameter {

	public name: string = "Topology";
	public nickName: string = "T";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
