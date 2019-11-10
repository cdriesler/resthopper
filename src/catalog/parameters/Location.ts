import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class LocationParam extends ResthopperParameter {

	public guid: string = "87391af3-35fe-4a40-b001-2bd4547ccd45";
	public name: string = "Location";
	public nickName: string = "Loc"
	public description: string = "Contains a collection of latitude-longitude coordinates"
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