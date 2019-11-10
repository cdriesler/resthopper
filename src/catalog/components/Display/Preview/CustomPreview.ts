import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CustomPreview extends ResthopperComponent {

	public guid: string = "537b0419-bbc2-4ff4-bf08-afe526367b2c";
	public name: string = "CustomPreview";
	public category: string = "Display";
	public subCategory: string = "Preview";
	public description: string = "Allows for customized geometry previews";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{
		"Geometry_G": CustomPreviewInput_Geometry_G,
		"Material_M": CustomPreviewInput_Material_M,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Geometry_G": new CustomPreviewInput_Geometry_G(),
			"Material_M": new CustomPreviewInput_Material_M(),
		}
		this.output = {

		}
	}

}

class CustomPreviewInput_Geometry_G extends ResthopperParameter {

	public name: string = "Geometry";
	public nickName: string = "G";
	public isOptional: boolean = false;
	public typeName: string = "Geometry;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CustomPreviewInput_Material_M extends ResthopperParameter {

	public name: string = "Material";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Shader;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
