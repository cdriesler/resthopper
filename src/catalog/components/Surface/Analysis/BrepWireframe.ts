import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BrepWireframe extends ResthopperComponent {

	public guid: string = "ac750e41-2450-4f98-9658-98fef97b01b2";
	public name: string = "Brep Wireframe";
	public nickName: string = "Wires";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Extract the wireframe curves of a brep.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Surface Components";

	public input:
	{
		"brep_b": BrepWireframeInput_brep_b,
		"density_d": BrepWireframeInput_density_d,
	}

	public output:
	{
		"wireframe_w": BrepWireframeOutput_wireframe_w,
	}

	constructor() {
		super();
		this.input = {
			"brep_b": new BrepWireframeInput_brep_b(),
			"density_d": new BrepWireframeInput_density_d(),
		}
		this.output = {
			"wireframe_w": new BrepWireframeOutput_wireframe_w(),
		}
	}

}

class BrepWireframeInput_brep_b extends ResthopperParameter {

	public name: string = "Brep";
	public nickName: string = "B";
	public description: string = "Base Brep"
	public isOptional: boolean = false;
	public typeName: string = "Brep"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepWireframeInput_density_d extends ResthopperParameter {

	public name: string = "Density";
	public nickName: string = "D";
	public description: string = "Wireframe isocurve density"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class BrepWireframeOutput_wireframe_w extends ResthopperParameter {

	public name: string = "Wireframe";
	public nickName: string = "W";
	public description: string = "Wireframe curves"
	public isOptional: boolean = false;
	public typeName: string = "Curve"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
