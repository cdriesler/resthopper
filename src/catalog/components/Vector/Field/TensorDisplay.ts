import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TensorDisplay extends ResthopperComponent {

	public guid: string = "08619b6d-f9c4-4cb2-adcd-90959f08dc0d";
	public name: string = "TensorDisplay";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Display the tensor vectors of a field section";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"Field_F": TensorDisplayInput_Field_F,
		"Section_S": TensorDisplayInput_Section_S,
		"Samples_N": TensorDisplayInput_Samples_N,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"Field_F": new TensorDisplayInput_Field_F(),
			"Section_S": new TensorDisplayInput_Section_S(),
			"Samples_N": new TensorDisplayInput_Samples_N(),
		}
		this.output = {

		}
	}

}

class TensorDisplayInput_Field_F extends ResthopperParameter {

	public name: string = "Field";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Field;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TensorDisplayInput_Section_S extends ResthopperParameter {

	public name: string = "Section";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Rectangle;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TensorDisplayInput_Samples_N extends ResthopperParameter {

	public name: string = "Samples";
	public nickName: string = "N";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
