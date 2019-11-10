import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Format extends ResthopperComponent {

	public guid: string = "758d91a0-4aec-47f8-9671-16739a8a2c5d";
	public name: string = "Format";
	public category: string = "Sets";
	public subCategory: string = "Text";
	public description: string = "Format some data using placeholders and formatting tags";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Data0_0": FormatInput_Data0_0,
		"Data1_1": FormatInput_Data1_1,
		"Format_F": FormatInput_Format_F,
		"Culture_C": FormatInput_Culture_C,
	}

	public output:
	{
		"Text_T": FormatOutput_Text_T,
	}

	constructor() {
		super();
		this.input = {
			"Data0_0": new FormatInput_Data0_0(),
			"Data1_1": new FormatInput_Data1_1(),
			"Format_F": new FormatInput_Format_F(),
			"Culture_C": new FormatInput_Culture_C(),
		}
		this.output = {
			"Text_T": new FormatOutput_Text_T(),
		}
	}

}

class FormatInput_Data0_0 extends ResthopperParameter {

	public name: string = "Data0";
	public nickName: string = "0";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FormatInput_Data1_1 extends ResthopperParameter {

	public name: string = "Data1";
	public nickName: string = "1";
	public isOptional: boolean = true;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FormatInput_Format_F extends ResthopperParameter {

	public name: string = "Format";
	public nickName: string = "F";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FormatInput_Culture_C extends ResthopperParameter {

	public name: string = "Culture";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Culture;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class FormatOutput_Text_T extends ResthopperParameter {

	public name: string = "Text";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
