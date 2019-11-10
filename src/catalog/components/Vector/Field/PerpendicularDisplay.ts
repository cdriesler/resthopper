import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PerpendicularDisplay extends ResthopperComponent {

	public guid: string = "bf106e4c-68f4-476f-b05b-9c15fb50e078";
	public name: string = "PerpendicularDisplay";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Display the perpendicularity of a field through a section";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"field_f": PerpendicularDisplayInput_field_f,
		"section_s": PerpendicularDisplayInput_section_s,
		"samples_n": PerpendicularDisplayInput_samples_n,
		"negativecolour_c": PerpendicularDisplayInput_negativecolour_c,
	}

	public output:
	{
		"display_d": PerpendicularDisplayOutput_display_d,
	}

	constructor() {
		super();
		this.input = {
			"field_f": new PerpendicularDisplayInput_field_f(),
			"section_s": new PerpendicularDisplayInput_section_s(),
			"samples_n": new PerpendicularDisplayInput_samples_n(),
			"negativecolour_c": new PerpendicularDisplayInput_negativecolour_c(),
		}
		this.output = {
			"display_d": new PerpendicularDisplayOutput_display_d(),
		}
	}

}

class PerpendicularDisplayInput_field_f extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PerpendicularDisplayInput_section_s extends ResthopperParameter {

	public name: string = "Section";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PerpendicularDisplayInput_samples_n extends ResthopperParameter {

	public name: string = "Samples";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PerpendicularDisplayInput_negativecolour_c extends ResthopperParameter {

	public name: string = "NegativeColour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PerpendicularDisplayOutput_display_d extends ResthopperParameter {

	public name: string = "Display";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Mesh"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
