import ResthopperParameter from './../../models/ResthopperParameter';

export class DataPathParam extends ResthopperParameter {

	public guid: string = "56c9c942-791f-4eeb-a4f0-82b93f1c0909";
	public name: string = "DataPath";
	public nickName: string = "Path"
	public description: string = "Contains a collection of data-tree paths"
	public isOptional: boolean = false;
	public typeName: string = ""

	public isUserInput: boolean = false;
	public isUserOutput: boolean = false;

	public sources: string[] = [];
	public values: any[] = []

	constructor(value?: any) {
		super();
		this.values = [value!] ?? [];
	}

}