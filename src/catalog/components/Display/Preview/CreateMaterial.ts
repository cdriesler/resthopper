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
		"diffuse_kd": CreateMaterialInput_diffuse_kd,
		"specular_ks": CreateMaterialInput_specular_ks,
		"emission_ke": CreateMaterialInput_emission_ke,
		"transparency_t": CreateMaterialInput_transparency_t,
		"shine_s": CreateMaterialInput_shine_s,
	}

	public output:
	{
		"material_m": CreateMaterialOutput_material_m,
	}

	constructor() {
		super();
		this.input = {
			"diffuse_kd": new CreateMaterialInput_diffuse_kd(),
			"specular_ks": new CreateMaterialInput_specular_ks(),
			"emission_ke": new CreateMaterialInput_emission_ke(),
			"transparency_t": new CreateMaterialInput_transparency_t(),
			"shine_s": new CreateMaterialInput_shine_s(),
		}
		this.output = {
			"material_m": new CreateMaterialOutput_material_m(),
		}
	}

}

class CreateMaterialInput_diffuse_kd extends ResthopperParameter {

	public name: string = "Diffuse";
	public nickName: string = "Kd";
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CreateMaterialInput_specular_ks extends ResthopperParameter {

	public name: string = "Specular";
	public nickName: string = "Ks";
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CreateMaterialInput_emission_ke extends ResthopperParameter {

	public name: string = "Emission";
	public nickName: string = "Ke";
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CreateMaterialInput_transparency_t extends ResthopperParameter {

	public name: string = "Transparency";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CreateMaterialInput_shine_s extends ResthopperParameter {

	public name: string = "Shine";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class CreateMaterialOutput_material_m extends ResthopperParameter {

	public name: string = "Material";
	public nickName: string = "M";
	public isOptional: boolean = false;
	public typeName: string = "Shader"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
