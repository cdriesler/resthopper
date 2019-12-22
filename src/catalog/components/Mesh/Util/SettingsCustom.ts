import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SettingsCustom extends ResthopperComponent {

	public guid: string = "4a0180e5-d8f9-46e7-bd34-ced804601462";
	public name: string = "Settings (Custom)";
	public nickName: string = "CustomMeshSettings";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Represents custom mesh settings.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"stitchseams_stitch": SettingsCustomInput_stitchseams_stitch,
		"simpleplanes_planes": SettingsCustomInput_simpleplanes_planes,
		"refine_refine": SettingsCustomInput_refine_refine,
		"mincount_min": SettingsCustomInput_mincount_min,
		"maxcount_max": SettingsCustomInput_maxcount_max,
		"aspectratio_aspect": SettingsCustomInput_aspectratio_aspect,
		"maxdistance_maxdist": SettingsCustomInput_maxdistance_maxdist,
		"maxangle_maxangle": SettingsCustomInput_maxangle_maxangle,
		"minedge_minedge": SettingsCustomInput_minedge_minedge,
		"maxedge_maxedge": SettingsCustomInput_maxedge_maxedge,
	}

	public output:
	{
		"settings_s": SettingsCustomOutput_settings_s,
	}

	constructor() {
		super();
		this.input = {
			"stitchseams_stitch": new SettingsCustomInput_stitchseams_stitch(),
			"simpleplanes_planes": new SettingsCustomInput_simpleplanes_planes(),
			"refine_refine": new SettingsCustomInput_refine_refine(),
			"mincount_min": new SettingsCustomInput_mincount_min(),
			"maxcount_max": new SettingsCustomInput_maxcount_max(),
			"aspectratio_aspect": new SettingsCustomInput_aspectratio_aspect(),
			"maxdistance_maxdist": new SettingsCustomInput_maxdistance_maxdist(),
			"maxangle_maxangle": new SettingsCustomInput_maxangle_maxangle(),
			"minedge_minedge": new SettingsCustomInput_minedge_minedge(),
			"maxedge_maxedge": new SettingsCustomInput_maxedge_maxedge(),
		}
		this.output = {
			"settings_s": new SettingsCustomOutput_settings_s(),
		}
	}

}

class SettingsCustomInput_stitchseams_stitch extends ResthopperParameter {

	public name: string = "StitchSeams";
	public nickName: string = "Stitch";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SettingsCustomInput_simpleplanes_planes extends ResthopperParameter {

	public name: string = "SimplePlanes";
	public nickName: string = "Planes";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SettingsCustomInput_refine_refine extends ResthopperParameter {

	public name: string = "Refine";
	public nickName: string = "Refine";
	public description: string = "Empty Boolean parameter"
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SettingsCustomInput_mincount_min extends ResthopperParameter {

	public name: string = "MinCount";
	public nickName: string = "Min";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SettingsCustomInput_maxcount_max extends ResthopperParameter {

	public name: string = "MaxCount";
	public nickName: string = "Max";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SettingsCustomInput_aspectratio_aspect extends ResthopperParameter {

	public name: string = "AspectRatio";
	public nickName: string = "Aspect";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SettingsCustomInput_maxdistance_maxdist extends ResthopperParameter {

	public name: string = "MaxDistance";
	public nickName: string = "MaxDist";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SettingsCustomInput_maxangle_maxangle extends ResthopperParameter {

	public name: string = "MaxAngle";
	public nickName: string = "MaxAngle";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SettingsCustomInput_minedge_minedge extends ResthopperParameter {

	public name: string = "MinEdge";
	public nickName: string = "MinEdge";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SettingsCustomInput_maxedge_maxedge extends ResthopperParameter {

	public name: string = "MaxEdge";
	public nickName: string = "MaxEdge";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SettingsCustomOutput_settings_s extends ResthopperParameter {

	public name: string = "Settings";
	public nickName: string = "S";
	public description: string = "Empty MeshParameters parameter"
	public isOptional: boolean = false;
	public typeName: string = "MeshParameters"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
