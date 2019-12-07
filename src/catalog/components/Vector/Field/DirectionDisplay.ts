import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DirectionDisplay extends ResthopperComponent {

	public guid: string = "5ba20fab-6d71-48ea-a98f-cb034db6bbdc";
	public name: string = "DirectionDisplay";
	public nickName: string = "FDir";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Display the force directions of a field section";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"field_f": DirectionDisplayInput_field_f,
		"section_s": DirectionDisplayInput_section_s,
		"samples_n": DirectionDisplayInput_samples_n,
	}

	public output:
	{
		"display_d": DirectionDisplayOutput_display_d,
	}

	constructor() {
		super();
		this.input = {
			"field_f": new DirectionDisplayInput_field_f(),
			"section_s": new DirectionDisplayInput_section_s(),
			"samples_n": new DirectionDisplayInput_samples_n(),
		}
		this.output = {
			"display_d": new DirectionDisplayOutput_display_d(),
		}
	}

}

class DirectionDisplayInput_field_f extends ResthopperParameter {

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

class DirectionDisplayInput_section_s extends ResthopperParameter {

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

class DirectionDisplayInput_samples_n extends ResthopperParameter {

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

class DirectionDisplayOutput_display_d extends ResthopperParameter {

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
