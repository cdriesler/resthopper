import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SymbolSimple extends ResthopperComponent {

	public guid: string = "79747717-1874-4c34-b790-faef53b50569";
	public name: string = "SymbolSimple";
	public nickName: string = "SymSim";
	public category: string = "Display";
	public subCategory: string = "Preview";
	public description: string = "Simple symbol display properties";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"style_x": SymbolSimpleInput_style_x,
		"size_s": SymbolSimpleInput_size_s,
		"rotation_r": SymbolSimpleInput_rotation_r,
		"colour_c": SymbolSimpleInput_colour_c,
	}

	public output:
	{
		"symboldisplay_d": SymbolSimpleOutput_symboldisplay_d,
	}

	constructor() {
		super();
		this.input = {
			"style_x": new SymbolSimpleInput_style_x(),
			"size_s": new SymbolSimpleInput_size_s(),
			"rotation_r": new SymbolSimpleInput_rotation_r(),
			"colour_c": new SymbolSimpleInput_colour_c(),
		}
		this.output = {
			"symboldisplay_d": new SymbolSimpleOutput_symboldisplay_d(),
		}
	}

}

class SymbolSimpleInput_style_x extends ResthopperParameter {

	public name: string = "Style";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolSimpleInput_size_s extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolSimpleInput_rotation_r extends ResthopperParameter {

	public name: string = "Rotation";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolSimpleInput_colour_c extends ResthopperParameter {

	public name: string = "Colour";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolSimpleOutput_symboldisplay_d extends ResthopperParameter {

	public name: string = "SymbolDisplay";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Symbol Display"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
