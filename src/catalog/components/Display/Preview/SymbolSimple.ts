import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SymbolSimple extends ResthopperComponent {

	public guid: string = "79747717-1874-4c34-b790-faef53b50569";
	public name: string = "SymbolSimple";
	public category: string = "Display";
	public subCategory: string = "Preview";
	public description: string = "Simple symbol display properties";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"Style_X": SymbolSimpleInput_Style_X,
		"Size_S": SymbolSimpleInput_Size_S,
		"Rotation_R": SymbolSimpleInput_Rotation_R,
		"Colour_C": SymbolSimpleInput_Colour_C,
	}

	public output:
	{
		"SymbolDisplay_D": SymbolSimpleOutput_SymbolDisplay_D,
	}

	constructor() {
		super();
		this.input = {
			"Style_X": new SymbolSimpleInput_Style_X(),
			"Size_S": new SymbolSimpleInput_Size_S(),
			"Rotation_R": new SymbolSimpleInput_Rotation_R(),
			"Colour_C": new SymbolSimpleInput_Colour_C(),
		}
		this.output = {
			"SymbolDisplay_D": new SymbolSimpleOutput_SymbolDisplay_D(),
		}
	}

}

class SymbolSimpleInput_Style_X extends ResthopperParameter {

	public name: string = "Style";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolSimpleInput_Size_S extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolSimpleInput_Rotation_R extends ResthopperParameter {

	public name: string = "Rotation";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolSimpleInput_Colour_C extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolSimpleOutput_SymbolDisplay_D extends ResthopperParameter {

	public name: string = "SymbolDisplay";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Symbol Display;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
