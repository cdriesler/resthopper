import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class SymbolDisplayParam extends ResthopperParameter {

	public guid: string = "2bcd153c-c964-4199-b8e4-4a19dfd34967";
	public name: string = "SymbolDisplay";
	public nickName: string = "SymDis"
	public description: string = "Symbol display properties"
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