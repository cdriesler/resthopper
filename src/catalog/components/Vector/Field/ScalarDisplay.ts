import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ScalarDisplay extends ResthopperComponent {

	public guid: string = "55f9ce6a-490c-4f25-a536-a3d47b794752";
	public name: string = "ScalarDisplay";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Display the scalar values of a field section";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"Field_F": ScalarDisplayInput_Field_F,
		"Section_S": ScalarDisplayInput_Section_S,
		"Samples_N": ScalarDisplayInput_Samples_N,
	}

	public output:
	{
		"Display_D": ScalarDisplayOutput_Display_D,
	}

	constructor() {
		super();
		this.input = {
			"Field_F": new ScalarDisplayInput_Field_F(),
			"Section_S": new ScalarDisplayInput_Section_S(),
			"Samples_N": new ScalarDisplayInput_Samples_N(),
		}
		this.output = {
			"Display_D": new ScalarDisplayOutput_Display_D(),
		}
	}

}

class ScalarDisplayInput_Field_F extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScalarDisplayInput_Section_S extends ResthopperParameter {

	public name: string = "Section";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScalarDisplayInput_Samples_N extends ResthopperParameter {

	public name: string = "Samples";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class ScalarDisplayOutput_Display_D extends ResthopperParameter {

	public name: string = "Display";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Mesh;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
