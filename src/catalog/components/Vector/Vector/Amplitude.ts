import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Amplitude extends ResthopperComponent {

	public guid: string = "6ec39468-dae7-4ffa-a766-f2ab22a2c62e";
	public name: string = "Amplitude";
	public nickName: string = "Amp";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Set the amplitude (length) of a vector.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"vector_v": AmplitudeInput_vector_v,
		"amplitude_a": AmplitudeInput_amplitude_a,
	}

	public output:
	{
		"vector_v": AmplitudeOutput_vector_v,
	}

	constructor() {
		super();
		this.input = {
			"vector_v": new AmplitudeInput_vector_v(),
			"amplitude_a": new AmplitudeInput_amplitude_a(),
		}
		this.output = {
			"vector_v": new AmplitudeOutput_vector_v(),
		}
	}

}

class AmplitudeInput_vector_v extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AmplitudeInput_amplitude_a extends ResthopperParameter {

	public name: string = "Amplitude";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AmplitudeOutput_vector_v extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
