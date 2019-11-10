import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class ShaderParam extends ResthopperParameter {

	public guid: string = "288cfe66-f3dc-4c9a-bb96-ef81f47fe724";
	public name: string = "Shader";
	public nickName: string = "Shader"
	public description: string = "Contains a collection of display materials"
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