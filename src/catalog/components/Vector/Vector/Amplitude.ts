import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Amplitude extends ResthopperComponent {

	public guid: string = "6ec39468-dae7-4ffa-a766-f2ab22a2c62e";
	public name: string = "Amplitude";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Set the amplitude (length) of a vector.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

	public input:
	{
		"Vector_V": AmplitudeInput_Vector_V,
		"Amplitude_A": AmplitudeInput_Amplitude_A,
	}

	public output:
	{
		"Vector_V": AmplitudeOutput_Vector_V,
	}

	constructor() {
		super();
		this.input = {
			"Vector_V": new AmplitudeInput_Vector_V(),
			"Amplitude_A": new AmplitudeInput_Amplitude_A(),
		}
		this.output = {
			"Vector_V": new AmplitudeOutput_Vector_V(),
		}
	}

}

class AmplitudeInput_Vector_V extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AmplitudeInput_Amplitude_A extends ResthopperParameter {

	public name: string = "Amplitude";
	public nickName: string = "A";
	public isOptional: boolean = false;
	public typeName: string = "Number;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class AmplitudeOutput_Vector_V extends ResthopperParameter {

	public name: string = "Vector";
	public nickName: string = "V";
	public isOptional: boolean = false;
	public typeName: string = "Vector;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
