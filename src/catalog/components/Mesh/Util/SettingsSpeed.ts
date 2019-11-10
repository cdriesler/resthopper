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

	public library: string = "Surface Components";

	public input:
	{

	}

	public output:
	{
		"Settings_S": SettingsSpeedOutput_Settings_S,
	}

	constructor() {
		super();
		this.input = {

		}
		this.output = {
			"Settings_S": new SettingsSpeedOutput_Settings_S(),
		}
	}

}

class SettingsSpeedOutput_Settings_S extends ResthopperParameter {

	public name: string = "Settings";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "MeshParameters;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
