import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PartitionList extends ResthopperComponent {

	public guid: string = "5a93246d-2595-4c28-bc2d-90657634f92a";
	public name: string = "PartitionList";
	public category: string = "Sets";
	public subCategory: string = "List";
	public description: string = "Partition a list into sub-lists";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"list_l": PartitionListInput_list_l,
		"size_s": PartitionListInput_size_s,
	}

	public output:
	{
		"chunks_c": PartitionListOutput_chunks_c,
	}

	constructor() {
		super();
		this.input = {
			"list_l": new PartitionListInput_list_l(),
			"size_s": new PartitionListInput_size_s(),
		}
		this.output = {
			"chunks_c": new PartitionListOutput_chunks_c(),
		}
	}

}

class PartitionListInput_list_l extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PartitionListInput_size_s extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PartitionListOutput_chunks_c extends ResthopperParameter {

	public name: string = "Chunks";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
