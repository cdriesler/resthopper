import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class CircularArcParam extends ResthopperParameter {

	public guid: string = "04d3eace-deaa-475e-9e69-8f804d687998";
	public name: string = "CircularArc";
	public nickName: string = "Arc"
	public description: string = "Contains a collection of circular arcs"
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