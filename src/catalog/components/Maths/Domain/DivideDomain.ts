import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DivideDomain extends ResthopperComponent {

	public guid: string = "75ef4190-91a2-42d9-a245-32a7162b0384";
	public name: string = "DivideDomain";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Divide a domain into equal segments.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Domain_I": DivideDomainInput_Domain_I,
		"Count_C": DivideDomainInput_Count_C,
	}

	public output:
	{
		"Segments_S": DivideDomainOutput_Segments_S,
	}

	constructor() {
		super();
		this.input = {
			"Domain_I": new DivideDomainInput_Domain_I(),
			"Count_C": new DivideDomainInput_Count_C(),
		}
		this.output = {
			"Segments_S": new DivideDomainOutput_Segments_S(),
		}
	}

}

class DivideDomainInput_Domain_I extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideDomainInput_Count_C extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideDomainOutput_Segments_S extends ResthopperParameter {

	public name: string = "Segments";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Domain;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
