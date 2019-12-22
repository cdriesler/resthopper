import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TensorDisplay extends ResthopperComponent {

	public guid: string = "08619b6d-f9c4-4cb2-adcd-90959f08dc0d";
	public name: string = "Tensor Display";
	public nickName: string = "FTensor";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Display the tensor vectors of a field section";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"field_f": TensorDisplayInput_field_f,
		"section_s": TensorDisplayInput_section_s,
		"samples_n": TensorDisplayInput_samples_n,
	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {
			"field_f": new TensorDisplayInput_field_f(),
			"section_s": new TensorDisplayInput_section_s(),
			"samples_n": new TensorDisplayInput_samples_n(),
		}
		this.output = {

		}
	}

}

class TensorDisplayInput_field_f extends ResthopperParameter {

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

class TensorDisplayInput_section_s extends ResthopperParameter {

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

class TensorDisplayInput_samples_n extends ResthopperParameter {

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
