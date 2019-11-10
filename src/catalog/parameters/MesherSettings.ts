import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class MesherSettingsParam extends ResthopperParameter {

	public guid: string = "c3407fda-b505-4686-9165-38fe7a9274cf";
	public name: string = "MesherSettings";
	public nickName: string = "Mesh"
	public description: string = "Represents a list of Meshing settings."
	public isOptional: boolean = false;
	public typeName: string = ""

	public isUserInput: boolean = false;
	public isUserOutput: boolean = false;

	public sources: string[] = [];
	public values: any[] = []

	constructor(value?: any) {
		super();
		this.values = [value!] ?? [];
		this.instanceGuid = newGuid();
	}

}