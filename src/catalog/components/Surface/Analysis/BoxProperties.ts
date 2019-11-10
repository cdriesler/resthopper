import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoxProperties extends ResthopperComponent {

	public guid: string = "af9cdb9d-9617-4827-bb3c-9efd88c76a70";
	public name: string = "BoxProperties";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Get some properties of a box";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Box_B": BoxPropertiesInput_Box_B,
	}

	public output:
	{
		"Center_C": BoxPropertiesOutput_Center_C,
		"Diagonal_D": BoxPropertiesOutput_Diagonal_D,
		"Area_A": BoxPropertiesOutput_Area_A,
		"Volume_V": BoxPropertiesOutput_Volume_V,
		"Degeneracy_d": BoxPropertiesOutput_Degeneracy_d,
	}

	constructor() {
		super();
		this.input = {
			"Box_B": new BoxPropertiesInput_Box_B(),
		}
		this.output = {
			"Center_C": new BoxPropertiesOutput_Center_C(),
			"Diagonal_D": new BoxPropertiesOutput_Diagonal_D(),
			"Area_A": new BoxPropertiesOutput_Area_A(),
			"Volume_V": new BoxPropertiesOutput_Volume_V(),
			"Degeneracy_d": new BoxPropertiesOutput_Degeneracy_d(),
		}
	}

}

class BoxPropertiesInput_Box_B extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Box;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxPropertiesOutput_Center_C extends ResthopperParameter {

	public name: string = "Center";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxPropertiesOutput_Diagonal_D extends ResthopperParameter {

	public name: string = "Diagonal";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxPropertiesOutput_Area_A extends ResthopperParameter {

	public name: string = "Area";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxPropertiesOutput_Volume_V extends ResthopperParameter {

	public name: string = "Volume";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxPropertiesOutput_Degeneracy_d extends ResthopperParameter {

	public name: string = "Degeneracy";
	public nickName: string = "d";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
