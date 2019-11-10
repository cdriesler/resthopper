import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RegionSlits extends ResthopperComponent {

	public guid: string = "0feeeaca-8f1f-4d7c-a24a-8e7dd68604a2";
	public name: string = "RegionSlits";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Add slits to a collection of intersecting planar regions";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Regions_R": RegionSlitsInput_Regions_R,
		"Width_W": RegionSlitsInput_Width_W,
		"Gap_G": RegionSlitsInput_Gap_G,
	}

	public output:
	{
		"Regions_R": RegionSlitsOutput_Regions_R,
		"Topology_T": RegionSlitsOutput_Topology_T,
	}

	constructor() {
		super();
		this.input = {
			"Regions_R": new RegionSlitsInput_Regions_R(),
			"Width_W": new RegionSlitsInput_Width_W(),
			"Gap_G": new RegionSlitsInput_Gap_G(),
		}
		this.output = {
			"Regions_R": new RegionSlitsOutput_Regions_R(),
			"Topology_T": new RegionSlitsOutput_Topology_T(),
		}
	}

}

class RegionSlitsInput_Regions_R extends ResthopperParameter {

	public name: string = "Regions";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionSlitsInput_Width_W extends ResthopperParameter {

	public name: string = "Width";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionSlitsInput_Gap_G extends ResthopperParameter {

	public name: string = "Gap";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionSlitsOutput_Regions_R extends ResthopperParameter {

	public name: string = "Regions";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Surface;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class RegionSlitsOutput_Topology_T extends ResthopperParameter {

	public name: string = "Topology";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
