import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DirectionDisplay extends ResthopperComponent {

	public guid: string = "5ba20fab-6d71-48ea-a98f-cb034db6bbdc";
	public name: string = "DirectionDisplay";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Display the force directions of a field section";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"Field_F": DirectionDisplayInput_Field_F,
		"Section_S": DirectionDisplayInput_Section_S,
		"Samples_N": DirectionDisplayInput_Samples_N,
	}

	public output:
	{
		"Display_D": DirectionDisplayOutput_Display_D,
	}

	constructor() {
		super();
		this.input = {
			"Field_F": new DirectionDisplayInput_Field_F(),
			"Section_S": new DirectionDisplayInput_Section_S(),
			"Samples_N": new DirectionDisplayInput_Samples_N(),
		}
		this.output = {
			"Display_D": new DirectionDisplayOutput_Display_D(),
		}
	}

}

class DirectionDisplayInput_Field_F extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DirectionDisplayInput_Section_S extends ResthopperParameter {

	public name: string = "Section";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DirectionDisplayInput_Samples_N extends ResthopperParameter {

	public name: string = "Samples";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DirectionDisplayOutput_Display_D extends ResthopperParameter {

	public name: string = "Display";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
