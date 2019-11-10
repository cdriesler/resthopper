import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BreakField extends ResthopperComponent {

	public guid: string = "b27d53bc-e713-475d-81fd-71cdd8de2e58";
	public name: string = "BreakField";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Break a field into individual elements";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"Field_F": BreakFieldInput_Field_F,
	}

	public output:
	{
		"Fields_F": BreakFieldOutput_Fields_F,
	}

	constructor() {
		super();
		this.input = {
			"Field_F": new BreakFieldInput_Field_F(),
		}
		this.output = {
			"Fields_F": new BreakFieldOutput_Fields_F(),
		}
	}

}

class BreakFieldInput_Field_F extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BreakFieldOutput_Fields_F extends ResthopperParameter {

	public name: string = "Fields";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
