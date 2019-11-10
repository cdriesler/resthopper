import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class MatrixParam extends ResthopperParameter {

	public guid: string = "bd4a8a18-a3cc-40ba-965b-3be91fee563b";
	public name: string = "Matrix";
	public nickName: string = "Matrix"
	public description: string = "Contains a collection of numeric matrices"
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