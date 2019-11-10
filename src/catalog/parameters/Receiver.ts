import ResthopperParameter from './../../models/ResthopperParameter';

export class ReceiverParam extends ResthopperParameter {

	public guid: string = "f19b8c33-dff2-4cc2-b95b-b4005ff3c10c";
	public name: string = "Receiver";
	public nickName: string = "Receiver"
	public description: string = "A data receiver object."
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