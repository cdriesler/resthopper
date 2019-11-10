import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class TransformParam extends ResthopperParameter {

	public guid: string = "28f40e48-e739-4211-91bd-f4aefa5965f8";
	public name: string = "Transform";
	public nickName: string = "Transform"
	public description: string = "Contains a collection of three-dimensional transformations"
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