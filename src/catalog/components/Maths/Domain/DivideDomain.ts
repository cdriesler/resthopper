import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DivideDomain extends ResthopperComponent {

	public guid: string = "75ac008b-1bc2-4edd-b967-667d628b9d24";
	public name: string = "Divide Domain²";
	public nickName: string = "Divide";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Divides a two-dimensional domain into equal segments.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"domain_i": DivideDomainInput_domain_i,
		"ucount_u": DivideDomainInput_ucount_u,
		"vcount_v": DivideDomainInput_vcount_v,
	}

	public output:
	{
		"segments_s": DivideDomainOutput_segments_s,
	}

	constructor() {
		super();
		this.input = {
			"domain_i": new DivideDomainInput_domain_i(),
			"ucount_u": new DivideDomainInput_ucount_u(),
			"vcount_v": new DivideDomainInput_vcount_v(),
		}
		this.output = {
			"segments_s": new DivideDomainOutput_segments_s(),
		}
	}

}

class DivideDomainInput_domain_i extends ResthopperParameter {

	public name: string = "Domain";
	public nickName: string = "I";
	public description: string = "Empty Domain² parameter"
	public isOptional: boolean = false;
	public typeName: string = "Domain²"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideDomainInput_ucount_u extends ResthopperParameter {

	public name: string = "UCount";
	public nickName: string = "U";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class DivideDomainInput_vcount_v extends ResthopperParameter {

	public name: string = "VCount";
	public nickName: string = "V";
	public description: string = "Empty Integer parameter"
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
	public description: string = "Empty Domain² parameter"
	public isOptional: boolean = false;
	public typeName: string = "Domain²"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
