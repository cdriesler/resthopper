import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BrepWireframe extends ResthopperComponent {

	public guid: string = "ac750e41-2450-4f98-9658-98fef97b01b2";
	public name: string = "BrepWireframe";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Extract the wireframe curves of a brep.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"Brep_B": BrepWireframeInput_Brep_B,
		"Density_D": BrepWireframeInput_Density_D,
	}

	public output:
	{
		"Wireframe_W": BrepWireframeOutput_Wireframe_W,
	}

	constructor() {
		super();
		this.input = {
			"Brep_B": new BrepWireframeInput_Brep_B(),
			"Density_D": new BrepWireframeInput_Density_D(),
		}
		this.output = {
			"Wireframe_W": new BrepWireframeOutput_Wireframe_W(),
		}
	}

}

class BrepWireframeInput_Brep_B extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public isOptional: boolean = false;
	public typeName: string = "Brep;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepWireframeInput_Density_D extends ResthopperParameter {

	public name: string = "Density";
	public nickName: string = "D";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepWireframeOutput_Wireframe_W extends ResthopperParameter {

	public name: string = "Wireframe";
	public nickName: string = "W";
	public isOptional: boolean = false;
	public typeName: string = "Curve;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
