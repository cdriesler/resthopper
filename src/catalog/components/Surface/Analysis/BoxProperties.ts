import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoxProperties extends ResthopperComponent {

	public guid: string = "af9cdb9d-9617-4827-bb3c-9efd88c76a70";
	public name: string = "BoxProperties";
	public nickName: string = "BoxProp";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Get some properties of a box";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"box_b": BoxPropertiesInput_box_b,
	}

	public output:
	{
		"center_c": BoxPropertiesOutput_center_c,
		"diagonal_d": BoxPropertiesOutput_diagonal_d,
		"area_a": BoxPropertiesOutput_area_a,
		"volume_v": BoxPropertiesOutput_volume_v,
		"degeneracy_d": BoxPropertiesOutput_degeneracy_d,
	}

	constructor() {
		super();
		this.input = {
			"box_b": new BoxPropertiesInput_box_b(),
		}
		this.output = {
			"center_c": new BoxPropertiesOutput_center_c(),
			"diagonal_d": new BoxPropertiesOutput_diagonal_d(),
			"area_a": new BoxPropertiesOutput_area_a(),
			"volume_v": new BoxPropertiesOutput_volume_v(),
			"degeneracy_d": new BoxPropertiesOutput_degeneracy_d(),
		}
	}

}

class BoxPropertiesInput_box_b extends ResthopperParameter {

	public name: string = "Box";
	public nickName: string = "B";
	public description: string = "Empty Box parameter"
	public isOptional: boolean = false;
	public typeName: string = "Box"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxPropertiesOutput_center_c extends ResthopperParameter {

	public name: string = "Center";
	public nickName: string = "C";
	public description: string = "Empty Point parameter"
	public isOptional: boolean = false;
	public typeName: string = "Point"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxPropertiesOutput_diagonal_d extends ResthopperParameter {

	public name: string = "Diagonal";
	public nickName: string = "D";
	public description: string = "Empty Vector parameter"
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxPropertiesOutput_area_a extends ResthopperParameter {

	public name: string = "Area";
	public nickName: string = "A";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxPropertiesOutput_volume_v extends ResthopperParameter {

	public name: string = "Volume";
	public nickName: string = "V";
	public description: string = "Empty Number parameter"
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BoxPropertiesOutput_degeneracy_d extends ResthopperParameter {

	public name: string = "Degeneracy";
	public nickName: string = "d";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
