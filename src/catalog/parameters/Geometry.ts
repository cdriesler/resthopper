import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class GeometryParam extends ResthopperParameter {

	public guid: string = "ac2bc2cb-70fb-4dd5-9c78-7e1ea97fe278";
	public name: string = "Geometry";
	public nickName: string = "Geo"
	public description: string = "Contains a collection of generic geometry"
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