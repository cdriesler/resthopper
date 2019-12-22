import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CustomPreview extends ResthopperComponent {

	public guid: string = "537b0419-bbc2-4ff4-bf08-afe526367b2c";
	public name: string = "Custom Preview";
	public nickName: string = "Preview";
	public category: string = "Display";
	public subCategory: string = "Preview";
	public description: string = "Allows for customized geometry previews";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"geometry_g": CustomPreviewInput_geometry_g,
		"material_m": CustomPreviewInput_material_m,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"geometry_g": new CustomPreviewInput_geometry_g(),
			"material_m": new CustomPreviewInput_material_m(),
		}
		this.output = {

		}
	}

}

class CustomPreviewInput_geometry_g extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public description: string = "Empty Geometry parameter"
	public isOptional: boolean = false;
	public typeName: string = "Geometry"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CustomPreviewInput_material_m extends ResthopperParameter {

	public name: string = "Material";
	public nickName: string = "M";
	public description: string = "Empty Shader parameter"
	public isOptional: boolean = false;
	public typeName: string = "Shader"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
