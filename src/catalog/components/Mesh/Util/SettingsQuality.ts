import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SettingsQuality extends ResthopperComponent {

	public guid: string = "1b0ee096-cc76-4847-8941-04a9e256de76";
	public name: string = "SettingsQuality";
	public nickName: string = "Smooth";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Represents 'Smooth & slower' mesh settings.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{

	}

	public output:
	{
		"settings_s": SettingsQualityOutput_settings_s,
	}

	constructor() {
		super();
		this.input = {

		}
		this.output = {
			"settings_s": new SettingsQualityOutput_settings_s(),
		}
	}

}

class SettingsQualityOutput_settings_s extends ResthopperParameter {

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
