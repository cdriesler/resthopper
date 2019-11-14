import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BreakField extends ResthopperComponent {

	public guid: string = "b27d53bc-e713-475d-81fd-71cdd8de2e58";
	public name: string = "BreakField";
	public nickName: string = "BreakF";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Break a field into individual elements";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"field_f": BreakFieldInput_field_f,
	}

	public output:
	{
		"fields_f": BreakFieldOutput_fields_f,
	}

	constructor() {
		super();
		this.input = {
			"field_f": new BreakFieldInput_field_f(),
		}
		this.output = {
			"fields_f": new BreakFieldOutput_fields_f(),
		}
	}

}

class BreakFieldInput_field_f extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BreakFieldOutput_fields_f extends ResthopperParameter {

	public name: string = "Fields";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
