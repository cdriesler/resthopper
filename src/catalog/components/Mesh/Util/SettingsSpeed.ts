import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SettingsSpeed extends ResthopperComponent {

	public guid: string = "255ca3e9-2c1e-443a-a404-e76b5c63f4cb";
	public name: string = "SettingsSpeed";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Represents 'Jagged & faster' mesh settings.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{

	}

	public output:
	{
		"settings_s": SettingsSpeedOutput_settings_s,
	}

	constructor() {
		super();
		this.input = {

		}
		this.output = {
			"settings_s": new SettingsSpeedOutput_settings_s(),
		}
	}

}

class SettingsSpeedOutput_settings_s extends ResthopperParameter {

	public name: string = "Settings";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "MeshParameters"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
