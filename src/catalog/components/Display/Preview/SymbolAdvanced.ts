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
	public isVariable: boolean = false;

	public library: string = "Field Components";

	public input:
	{
		"style_x": SymbolAdvancedInput_style_x,
		"sizeprimary_s1": SymbolAdvancedInput_sizeprimary_s1,
		"sizesecondary_s2": SymbolAdvancedInput_sizesecondary_s2,
		"rotation_r": SymbolAdvancedInput_rotation_r,
		"fill_cf": SymbolAdvancedInput_fill_cf,
		"edge_ce": SymbolAdvancedInput_edge_ce,
		"width_w": SymbolAdvancedInput_width_w,
		"adjust_a": SymbolAdvancedInput_adjust_a,
	}

	public output:
	{
		"symboldisplay_d": SymbolAdvancedOutput_symboldisplay_d,
	}

	constructor() {
		super();
		this.input = {
			"style_x": new SymbolAdvancedInput_style_x(),
			"sizeprimary_s1": new SymbolAdvancedInput_sizeprimary_s1(),
			"sizesecondary_s2": new SymbolAdvancedInput_sizesecondary_s2(),
			"rotation_r": new SymbolAdvancedInput_rotation_r(),
			"fill_cf": new SymbolAdvancedInput_fill_cf(),
			"edge_ce": new SymbolAdvancedInput_edge_ce(),
			"width_w": new SymbolAdvancedInput_width_w(),
			"adjust_a": new SymbolAdvancedInput_adjust_a(),
		}
		this.output = {
			"symboldisplay_d": new SymbolAdvancedOutput_symboldisplay_d(),
		}
	}

}

class SymbolAdvancedInput_style_x extends ResthopperParameter {

	public name: string = "Style";
	public nickName: string = "X";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolAdvancedInput_sizeprimary_s1 extends ResthopperParameter {

	public name: string = "SizePrimary";
	public nickName: string = "S1";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolAdvancedInput_sizesecondary_s2 extends ResthopperParameter {

	public name: string = "SizeSecondary";
	public nickName: string = "S2";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolAdvancedInput_rotation_r extends ResthopperParameter {

	public name: string = "Rotation";
	public nickName: string = "R";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolAdvancedInput_fill_cf extends ResthopperParameter {

	public name: string = "Fill";
	public nickName: string = "Cf";
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolAdvancedInput_edge_ce extends ResthopperParameter {

	public name: string = "Edge";
	public nickName: string = "Ce";
	public isOptional: boolean = false;
	public typeName: string = "Colour"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolAdvancedInput_width_w extends ResthopperParameter {

	public name: string = "Width";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolAdvancedInput_adjust_a extends ResthopperParameter {

	public name: string = "Adjust";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Boolean"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SymbolAdvancedOutput_symboldisplay_d extends ResthopperParameter {

	public name: string = "SymbolDisplay";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Symbol Display"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
