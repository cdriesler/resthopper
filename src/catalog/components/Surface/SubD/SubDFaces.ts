import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubDFaces extends ResthopperComponent {

	public guid: string = "83c81431-17bc-4bff-bb85-be0a846bd044";
	public name: string = "SubDFaces";
	public category: string = "Surface";
	public subCategory: string = "SubD";
	public description: string = "Extract all face data from a Sub-D surface.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

	public input:
	{
		"SubD_S": SubDFacesInput_SubD_S,
	}

	public output:
	{
		"Point_P": SubDFacesOutput_Point_P,
		"Count_C": SubDFacesOutput_Count_C,
		"Edges_E": SubDFacesOutput_Edges_E,
		"Vertices_V": SubDFacesOutput_Vertices_V,
	}

	constructor() {
		super();
		this.input = {
			"SubD_S": new SubDFacesInput_SubD_S(),
		}
		this.output = {
			"Point_P": new SubDFacesOutput_Point_P(),
			"Count_C": new SubDFacesOutput_Count_C(),
			"Edges_E": new SubDFacesOutput_Edges_E(),
			"Vertices_V": new SubDFacesOutput_Vertices_V(),
		}
	}

}

class SubDFacesInput_SubD_S extends ResthopperParameter {

	public name: string = "SubD";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "SubD;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDFacesOutput_Point_P extends ResthopperParameter {

	public name: string = "Point";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Point;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDFacesOutput_Count_C extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDFacesOutput_Edges_E extends ResthopperParameter {

	public name: string = "Edges";
	public nickName: string = "E";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class SubDFacesOutput_Vertices_V extends ResthopperParameter {

	public name: string = "Vertices";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Text;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
