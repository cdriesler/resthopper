import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class SurfaceParam extends ResthopperParameter {

	public guid: string = "deaf8653-5528-4286-807c-3de8b8dad781";
	public name: string = "Surface";
	public nickName: string = "Srf"
	public description: string = "Contains a collection of generic surfaces"
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