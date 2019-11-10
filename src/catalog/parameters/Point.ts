import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class PointParam extends ResthopperParameter {

	public guid: string = "fbac3e32-f100-4292-8692-77240a42fd1a";
	public name: string = "Point";
	public nickName: string = "Pt"
	public description: string = "Contains a collection of three-dimensional points"
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