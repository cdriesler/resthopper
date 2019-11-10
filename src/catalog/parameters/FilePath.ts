import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class FilePathParam extends ResthopperParameter {

	public guid: string = "06953bda-1d37-4d58-9b38-4b3c74e54c8f";
	public name: string = "FilePath";
	public nickName: string = "Path"
	public description: string = "Contains a collection of file paths"
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