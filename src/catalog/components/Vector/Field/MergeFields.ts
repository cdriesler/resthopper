import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeFields extends ResthopperComponent {

	public guid: string = "d9a6fbd2-2e9f-472e-8147-33bf0233a115";
	public name: string = "MergeFields";
	public nickName: string = "MergeF";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Merge a collection of fields into one";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"fields_f": MergeFieldsInput_fields_f,
	}

	public output:
	{
		"field_f": MergeFieldsOutput_field_f,
	}

	constructor() {
		super();
		this.input = {
			"fields_f": new MergeFieldsInput_fields_f(),
		}
		this.output = {
			"field_f": new MergeFieldsOutput_field_f(),
		}
	}

}

class MergeFieldsInput_fields_f extends ResthopperParameter {

	public name: string = "Fields";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeFieldsOutput_field_f extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
