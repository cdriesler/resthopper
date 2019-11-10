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
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"domain_i": DivideDomainInput_domain_i,
		"count_c": DivideDomainInput_count_c,
	}

	public output:
	{
		"segments_s": DivideDomainOutput_segments_s,
	}

	constructor() {
		super();
		this.input = {
			"domain_i": new DivideDomainInput_domain_i(),
			"count_c": new DivideDomainInput_count_c(),
		}
		this.output = {
			"segments_s": new DivideDomainOutput_segments_s(),
		}
	}

}

class DivideDomainInput_domain_i extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "I";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideDomainInput_count_c extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideDomainOutput_segments_s extends ResthopperParameter {

	public name: string = "Segments";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Domain"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
