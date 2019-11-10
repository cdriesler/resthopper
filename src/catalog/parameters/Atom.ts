import ResthopperParameter from './../../models/ResthopperParameter';
import { newGuid } from './../../utils/Guid';

export class AtomParam extends ResthopperParameter {

	public guid: string = "a80395af-f134-4d6a-9b89-15edf3161619";
	public name: string = "Atom";
	public nickName: string = "Atom"
	public description: string = "Contains a collection of atoms"
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