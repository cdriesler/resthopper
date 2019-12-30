import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class QuadRemeshSettings extends ResthopperComponent {

	public guid: string = "f562505b-4c49-49d1-932d-c8804b3fcec6";
	public name: string = "Quad Remesh Settings";
	public nickName: string = "QRSettings";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "Perform quad-remeshing on a mesh.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"targetcount_tc": QuadRemeshSettingsInput_targetcount_tc,
		"adaptivesize_as": QuadRemeshSettingsInput_adaptivesize_as,
		"adaptivecount_ac": QuadRemeshSettingsInput_adaptivecount_ac,
		"hardedges_he": QuadRemeshSettingsInput_hardedges_he,
		"seamedges_se": QuadRemeshSettingsInput_seamedges_se,
		"symmetry_sy": QuadRemeshSettingsInput_symmetry_sy,
		"guidecurves_gc": QuadRemeshSettingsInput_guidecurves_gc,
	}

	public output:
	{
		"settings_s": QuadRemeshSettingsOutput_settings_s,
	}

	constructor() {
		super();
		this.input = {
			"targetcount_tc": new QuadRemeshSettingsInput_targetcount_tc(),
			"adaptivesize_as": new QuadRemeshSettingsInput_adaptivesize_as(),
			"adaptivecount_ac": new QuadRemeshSettingsInput_adaptivecount_ac(),
			"hardedges_he": new QuadRemeshSettingsInput_hardedges_he(),
			"seamedges_se": new QuadRemeshSettingsInput_seamedges_se(),
			"symmetry_sy": new QuadRemeshSettingsInput_symmetry_sy(),
			"guidecurves_gc": new QuadRemeshSettingsInput_guidecurves_gc(),
		}
		this.output = {
			"settings_s": new QuadRemeshSettingsOutput_settings_s(),
		}
	}

}

class QuadRemeshSettingsInput_targetcount_tc extends ResthopperParameter {

	public name: string = "TargetCount";
	public nickName: string = "Tc";
	public description: string = "Number of quads to aim for in the result."
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadRemeshSettingsInput_adaptivesize_as extends ResthopperParameter {

	public name: string = "AdaptiveSize";
	public nickName: string = "As";
	public description: string = "A number in the range [0, 100] controlling how the quad sizes change depending on curvature."
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadRemeshSettingsInput_adaptivecount_ac extends ResthopperParameter {

	public name: string = "AdaptiveCount";
	public nickName: string = "Ac";
	public description: string = "True if the number of quads is allowed to be higher for high-curvature areas."
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadRemeshSettingsInput_hardedges_he extends ResthopperParameter {

	public name: string = "HardEdges";
	public nickName: string = "He";
	public description: string = "Detect and retain hard edges in the input mesh."
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadRemeshSettingsInput_seamedges_se extends ResthopperParameter {

	public name: string = "SeamEdges";
	public nickName: string = "Se";
	public description: string = "Detect and retain brep-face boundary edges (0=Off, 1=Smart, 2=Strict)."
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadRemeshSettingsInput_symmetry_sy extends ResthopperParameter {

	public name: string = "Symmetry";
	public nickName: string = "Sy";
	public description: string = "Symmetry axis (0=none, 1=X, 2=Y, 3=Z)."
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadRemeshSettingsInput_guidecurves_gc extends ResthopperParameter {

	public name: string = "GuideCurves";
	public nickName: string = "Gc";
	public description: string = "Guide curve influence. (0=approximate, 1=edge-ring, 2=edge-loop)."
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class QuadRemeshSettingsOutput_settings_s extends ResthopperParameter {

	public name: string = "Settings";
	public nickName: string = "S";
	public description: string = "Quad-remesher settings"
	public isOptional: boolean = false;
	public typeName: string = "Quad meshing settings"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
