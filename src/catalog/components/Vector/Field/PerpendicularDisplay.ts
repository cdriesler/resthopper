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

	public library: string = "Field Components";

	public input:
	{
		"Field_F": PerpendicularDisplayInput_Field_F,
		"Section_S": PerpendicularDisplayInput_Section_S,
		"Samples_N": PerpendicularDisplayInput_Samples_N,
		"NegativeColour_C": PerpendicularDisplayInput_NegativeColour_C,
	}

	public output:
	{
		"Display_D": PerpendicularDisplayOutput_Display_D,
	}

	constructor() {
		super();
		this.input = {
			"Field_F": new PerpendicularDisplayInput_Field_F(),
			"Section_S": new PerpendicularDisplayInput_Section_S(),
			"Samples_N": new PerpendicularDisplayInput_Samples_N(),
			"NegativeColour_C": new PerpendicularDisplayInput_NegativeColour_C(),
		}
		this.output = {
			"Display_D": new PerpendicularDisplayOutput_Display_D(),
		}
	}

}

class PerpendicularDisplayInput_Field_F extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PerpendicularDisplayInput_Section_S extends ResthopperParameter {

	public name: string = "Section";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PerpendicularDisplayInput_Samples_N extends ResthopperParameter {

	public name: string = "Samples";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PerpendicularDisplayInput_NegativeColour_C extends ResthopperParameter {

	public name: string = "NegativeColour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PerpendicularDisplayOutput_Display_D extends ResthopperParameter {

	public name: string = "Display";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
