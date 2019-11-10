import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SettingsCustom extends ResthopperComponent {

	public guid: string = "4a0180e5-d8f9-46e7-bd34-ced804601462";
	public name: string = "SettingsCustom";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Represents custom mesh settings.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"StitchSeams_Stitch": SettingsCustomInput_StitchSeams_Stitch,
		"SimplePlanes_Planes": SettingsCustomInput_SimplePlanes_Planes,
		"Refine_Refine": SettingsCustomInput_Refine_Refine,
		"MinCount_Min": SettingsCustomInput_MinCount_Min,
		"MaxCount_Max": SettingsCustomInput_MaxCount_Max,
		"AspectRatio_Aspect": SettingsCustomInput_AspectRatio_Aspect,
		"MaxDistance_MaxDist": SettingsCustomInput_MaxDistance_MaxDist,
		"MaxAngle_MaxAngle": SettingsCustomInput_MaxAngle_MaxAngle,
		"MinEdge_MinEdge": SettingsCustomInput_MinEdge_MinEdge,
		"MaxEdge_MaxEdge": SettingsCustomInput_MaxEdge_MaxEdge,
	}

	public output:
	{
		"Settings_S": SettingsCustomOutput_Settings_S,
	}

	constructor() {
		super();
		this.input = {
			"StitchSeams_Stitch": new SettingsCustomInput_StitchSeams_Stitch(),
			"SimplePlanes_Planes": new SettingsCustomInput_SimplePlanes_Planes(),
			"Refine_Refine": new SettingsCustomInput_Refine_Refine(),
			"MinCount_Min": new SettingsCustomInput_MinCount_Min(),
			"MaxCount_Max": new SettingsCustomInput_MaxCount_Max(),
			"AspectRatio_Aspect": new SettingsCustomInput_AspectRatio_Aspect(),
			"MaxDistance_MaxDist": new SettingsCustomInput_MaxDistance_MaxDist(),
			"MaxAngle_MaxAngle": new SettingsCustomInput_MaxAngle_MaxAngle(),
			"MinEdge_MinEdge": new SettingsCustomInput_MinEdge_MinEdge(),
			"MaxEdge_MaxEdge": new SettingsCustomInput_MaxEdge_MaxEdge(),
		}
		this.output = {
			"Settings_S": new SettingsCustomOutput_Settings_S(),
		}
	}

}

class SettingsCustomInput_StitchSeams_Stitch extends ResthopperParameter {

	public name: string = "StitchSeams";
	public nickName: string = "Stitch";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SettingsCustomInput_SimplePlanes_Planes extends ResthopperParameter {

	public name: string = "SimplePlanes";
	public nickName: string = "Planes";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SettingsCustomInput_Refine_Refine extends ResthopperParameter {

	public name: string = "Refine";
	public nickName: string = "Refine";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SettingsCustomInput_MinCount_Min extends ResthopperParameter {

	public name: string = "MinCount";
	public nickName: string = "Min";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SettingsCustomInput_MaxCount_Max extends ResthopperParameter {

	public name: string = "MaxCount";
	public nickName: string = "Max";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SettingsCustomInput_AspectRatio_Aspect extends ResthopperParameter {

	public name: string = "AspectRatio";
	public nickName: string = "Aspect";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SettingsCustomInput_MaxDistance_MaxDist extends ResthopperParameter {

	public name: string = "MaxDistance";
	public nickName: string = "MaxDist";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SettingsCustomInput_MaxAngle_MaxAngle extends ResthopperParameter {

	public name: string = "MaxAngle";
	public nickName: string = "MaxAngle";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SettingsCustomInput_MinEdge_MinEdge extends ResthopperParameter {

	public name: string = "MinEdge";
	public nickName: string = "MinEdge";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SettingsCustomInput_MaxEdge_MaxEdge extends ResthopperParameter {

	public name: string = "MaxEdge";
	public nickName: string = "MaxEdge";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SettingsCustomOutput_Settings_S extends ResthopperParameter {

	public name: string = "Settings";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "MeshParameters;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
