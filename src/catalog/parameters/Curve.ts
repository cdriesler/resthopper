import ResthopperParameter from './../../models/ResthopperParameter';

export class CurveParam extends ResthopperParameter {

	public guid: string = "d5967b9f-e8ee-436b-a8ad-29fdcecf32d5";
	public name: string = "Curve";
	public nickName: string = "Crv"
	public description: string = "Contains a collection of generic curves"
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