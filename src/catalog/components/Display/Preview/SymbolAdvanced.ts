import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SymbolAdvanced extends ResthopperComponent {

	public guid: string = "e5c82975-8011-412c-b56d-bb7fc9e7f28d";
	public name: string = "SymbolAdvanced";
	public category: string = "Display";
	public subCategory: string = "Preview";
	public description: string = "Advanced symbol display properties";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"Style_X": SymbolAdvancedInput_Style_X,
		"SizePrimary_S1": SymbolAdvancedInput_SizePrimary_S1,
		"SizeSecondary_S2": SymbolAdvancedInput_SizeSecondary_S2,
		"Rotation_R": SymbolAdvancedInput_Rotation_R,
		"Fill_Cf": SymbolAdvancedInput_Fill_Cf,
		"Edge_Ce": SymbolAdvancedInput_Edge_Ce,
		"Width_W": SymbolAdvancedInput_Width_W,
		"Adjust_A": SymbolAdvancedInput_Adjust_A,
	}

	public output:
	{
		"SymbolDisplay_D": SymbolAdvancedOutput_SymbolDisplay_D,
	}

	constructor() {
		super();
		this.input = {
			"Style_X": new SymbolAdvancedInput_Style_X(),
			"SizePrimary_S1": new SymbolAdvancedInput_SizePrimary_S1(),
			"SizeSecondary_S2": new SymbolAdvancedInput_SizeSecondary_S2(),
			"Rotation_R": new SymbolAdvancedInput_Rotation_R(),
			"Fill_Cf": new SymbolAdvancedInput_Fill_Cf(),
			"Edge_Ce": new SymbolAdvancedInput_Edge_Ce(),
			"Width_W": new SymbolAdvancedInput_Width_W(),
			"Adjust_A": new SymbolAdvancedInput_Adjust_A(),
		}
		this.output = {
			"SymbolDisplay_D": new SymbolAdvancedOutput_SymbolDisplay_D(),
		}
	}

}

class SymbolAdvancedInput_Style_X extends ResthopperParameter {

	public name: string = "Style";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolAdvancedInput_SizePrimary_S1 extends ResthopperParameter {

	public name: string = "SizePrimary";
	public nickName: string = "S1";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolAdvancedInput_SizeSecondary_S2 extends ResthopperParameter {

	public name: string = "SizeSecondary";
	public nickName: string = "S2";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolAdvancedInput_Rotation_R extends ResthopperParameter {

	public name: string = "Rotation";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolAdvancedInput_Fill_Cf extends ResthopperParameter {

	public name: string = "Fill";
	public nickName: string = "Cf";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolAdvancedInput_Edge_Ce extends ResthopperParameter {

	public name: string = "Edge";
	public nickName: string = "Ce";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolAdvancedInput_Width_W extends ResthopperParameter {

	public name: string = "Width";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolAdvancedInput_Adjust_A extends ResthopperParameter {

	public name: string = "Adjust";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Boolean;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolAdvancedOutput_SymbolDisplay_D extends ResthopperParameter {

	public name: string = "SymbolDisplay";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Symbol Display;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
