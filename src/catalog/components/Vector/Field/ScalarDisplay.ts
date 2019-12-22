import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ScalarDisplay extends ResthopperComponent {

	public guid: string = "55f9ce6a-490c-4f25-a536-a3d47b794752";
	public name: string = "Scalar Display";
	public nickName: string = "FScalar";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Display the scalar values of a field section";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"field_f": ScalarDisplayInput_field_f,
		"section_s": ScalarDisplayInput_section_s,
		"samples_n": ScalarDisplayInput_samples_n,
	}

	public output:
	{
		"display_d": ScalarDisplayOutput_display_d,
	}

	constructor() {
		super();
		this.input = {
			"field_f": new ScalarDisplayInput_field_f(),
			"section_s": new ScalarDisplayInput_section_s(),
			"samples_n": new ScalarDisplayInput_samples_n(),
		}
		this.output = {
			"display_d": new ScalarDisplayOutput_display_d(),
		}
	}

}

class ScalarDisplayInput_field_f extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public description: string = "Empty Field parameter"
	public isOptional: boolean = false;
	public typeName: string = "Field"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScalarDisplayInput_section_s extends ResthopperParameter {

	public name: string = "Section";
	public nickName: string = "S";
	public description: string = "Empty Rectangle parameter"
	public isOptional: boolean = false;
	public typeName: string = "Rectangle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScalarDisplayInput_samples_n extends ResthopperParameter {

	public name: string = "Samples";
	public nickName: string = "N";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScalarDisplayOutput_display_d extends ResthopperParameter {

	public name: string = "Display";
	public nickName: string = "D";
	public description: string = "Empty Mesh parameter"
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
