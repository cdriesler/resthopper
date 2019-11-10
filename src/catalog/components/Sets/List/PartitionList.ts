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
		"List_L": PartitionListInput_List_L,
		"Size_S": PartitionListInput_Size_S,
	}

	public output:
	{
		"Chunks_C": PartitionListOutput_Chunks_C,
	}

	constructor() {
		super();
		this.input = {
			"List_L": new PartitionListInput_List_L(),
			"Size_S": new PartitionListInput_Size_S(),
		}
		this.output = {
			"Chunks_C": new PartitionListOutput_Chunks_C(),
		}
	}

}

class PartitionListInput_List_L extends ResthopperParameter {

	public name: string = "List";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PartitionListInput_Size_S extends ResthopperParameter {

	public name: string = "Size";
	public nickName: string = "S";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class PartitionListOutput_Chunks_C extends ResthopperParameter {

	public name: string = "Chunks";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
