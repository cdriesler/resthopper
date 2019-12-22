import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TreeStatistics extends ResthopperComponent {

	public guid: string = "99bee19d-588c-41a0-b9b9-1d00fb03ea1a";
	public name: string = "Tree Statistics";
	public nickName: string = "TStat";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Get some statistics regarding a data tree.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"tree_t": TreeStatisticsInput_tree_t,
	}

	public output:
	{
		"paths_p": TreeStatisticsOutput_paths_p,
		"length_l": TreeStatisticsOutput_length_l,
		"count_c": TreeStatisticsOutput_count_c,
	}

	constructor() {
		super();
		this.input = {
			"tree_t": new TreeStatisticsInput_tree_t(),
		}
		this.output = {
			"paths_p": new TreeStatisticsOutput_paths_p(),
			"length_l": new TreeStatisticsOutput_length_l(),
			"count_c": new TreeStatisticsOutput_count_c(),
		}
	}

}

class TreeStatisticsInput_tree_t extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public description: string = "Empty Generic Data parameter"
	public isOptional: boolean = false;
	public typeName: string = "Generic Data"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TreeStatisticsOutput_paths_p extends ResthopperParameter {

	public name: string = "Paths";
	public nickName: string = "P";
	public description: string = "Empty Path parameter"
	public isOptional: boolean = false;
	public typeName: string = "Path"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TreeStatisticsOutput_length_l extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TreeStatisticsOutput_count_c extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "C";
	public description: string = "Empty Integer parameter"
	public isOptional: boolean = false;
	public typeName: string = "Integer"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
