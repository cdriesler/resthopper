import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MergeFields extends ResthopperComponent {

	public guid: string = "d9a6fbd2-2e9f-472e-8147-33bf0233a115";
	public name: string = "MergeFields";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Merge a collection of fields into one";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"Fields_F": MergeFieldsInput_Fields_F,
	}

	public output:
	{
		"Field_F": MergeFieldsOutput_Field_F,
	}

	constructor() {
		super();
		this.input = {
			"Fields_F": new MergeFieldsInput_Fields_F(),
		}
		this.output = {
			"Field_F": new MergeFieldsOutput_Field_F(),
		}
	}

}

class MergeFieldsInput_Fields_F extends ResthopperParameter {

	public name: string = "Fields";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class MergeFieldsOutput_Field_F extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
