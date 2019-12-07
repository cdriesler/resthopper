import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Format extends ResthopperComponent {

	public guid: string = "758d91a0-4aec-47f8-9671-16739a8a2c5d";
	public name: string = "Format";
	public nickName: string = "Format";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Format some data using placeholders and formatting tags";
	public isObsolete: boolean = false;
	public isVariable: boolean = true;

	public library: string = "Math Components";

	public input:
	{
		"data0_0": FormatInput_data0_0,
		"data1_1": FormatInput_data1_1,
		"format_f": FormatInput_format_f,
		"culture_c": FormatInput_culture_c,
	}

	public output:
	{
		"text_t": FormatOutput_text_t,
	}

	constructor() {
		super();
		this.input = {
			"data0_0": new FormatInput_data0_0(),
			"data1_1": new FormatInput_data1_1(),
			"format_f": new FormatInput_format_f(),
			"culture_c": new FormatInput_culture_c(),
		}
		this.output = {
			"text_t": new FormatOutput_text_t(),
		}
	}

}

class FormatInput_data0_0 extends ResthopperParameter {

	public name: string = "Data0";
	public nickName: string = "0";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FormatInput_data1_1 extends ResthopperParameter {

	public name: string = "Data1";
	public nickName: string = "1";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = true;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FormatInput_format_f extends ResthopperParameter {

	public name: string = "Format";
	public nickName: string = "F";
	public description: string = "Empty Text parameter"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FormatInput_culture_c extends ResthopperParameter {

	public name: string = "Culture";
	public nickName: string = "C";
	public description: string = "Empty Culture parameter"
	public isOptional: boolean = false;
	public typeName: string = "Culture"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FormatOutput_text_t extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public description: string = "Empty Text parameter"
	public isOptional: boolean = false;
	public typeName: string = "Text"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
