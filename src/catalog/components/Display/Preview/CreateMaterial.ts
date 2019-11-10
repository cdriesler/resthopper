import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CreateMaterial extends ResthopperComponent {

	public guid: string = "76975309-75a6-446a-afed-f8653720a9f2";
	public name: string = "CreateMaterial";
	public category: string = "Display";
	public subCategory: string = "Preview";
	public description: string = "Create an OpenGL material.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Diffuse_Kd": CreateMaterialInput_Diffuse_Kd,
		"Specular_Ks": CreateMaterialInput_Specular_Ks,
		"Emission_Ke": CreateMaterialInput_Emission_Ke,
		"Transparency_T": CreateMaterialInput_Transparency_T,
		"Shine_S": CreateMaterialInput_Shine_S,
	}

	public output:
	{
		"Material_M": CreateMaterialOutput_Material_M,
	}

	constructor() {
		super();
		this.input = {
			"Diffuse_Kd": new CreateMaterialInput_Diffuse_Kd(),
			"Specular_Ks": new CreateMaterialInput_Specular_Ks(),
			"Emission_Ke": new CreateMaterialInput_Emission_Ke(),
			"Transparency_T": new CreateMaterialInput_Transparency_T(),
			"Shine_S": new CreateMaterialInput_Shine_S(),
		}
		this.output = {
			"Material_M": new CreateMaterialOutput_Material_M(),
		}
	}

}

class CreateMaterialInput_Diffuse_Kd extends ResthopperParameter {

	public name: string = "Diffuse";
	public nickName: string = "Kd";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CreateMaterialInput_Specular_Ks extends ResthopperParameter {

	public name: string = "Specular";
	public nickName: string = "Ks";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CreateMaterialInput_Emission_Ke extends ResthopperParameter {

	public name: string = "Emission";
	public nickName: string = "Ke";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CreateMaterialInput_Transparency_T extends ResthopperParameter {

	public name: string = "Transparency";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CreateMaterialInput_Shine_S extends ResthopperParameter {

	public name: string = "Shine";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CreateMaterialOutput_Material_M extends ResthopperParameter {

	public name: string = "Material";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Shader;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
