import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TreeStatistics extends ResthopperComponent {

	public guid: string = "99bee19d-588c-41a0-b9b9-1d00fb03ea1a";
	public name: string = "TreeStatistics";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Get some statistics regarding a data tree.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

	public input:
	{
		"Tree_T": TreeStatisticsInput_Tree_T,
	}

	public output:
	{
		"Paths_P": TreeStatisticsOutput_Paths_P,
		"Length_L": TreeStatisticsOutput_Length_L,
		"Count_C": TreeStatisticsOutput_Count_C,
	}

	constructor() {
		super();
		this.input = {
			"Tree_T": new TreeStatisticsInput_Tree_T(),
		}
		this.output = {
			"Paths_P": new TreeStatisticsOutput_Paths_P(),
			"Length_L": new TreeStatisticsOutput_Length_L(),
			"Count_C": new TreeStatisticsOutput_Count_C(),
		}
	}

}

class TreeStatisticsInput_Tree_T extends ResthopperParameter {

	public name: string = "Tree";
	public nickName: string = "T";
	public isOptional: boolean = false;
	public typeName: string = "Generic Data;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TreeStatisticsOutput_Paths_P extends ResthopperParameter {

	public name: string = "Paths";
	public nickName: string = "P";
	public isOptional: boolean = false;
	public typeName: string = "Path;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TreeStatisticsOutput_Length_L extends ResthopperParameter {

	public name: string = "Length";
	public nickName: string = "L";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}

class TreeStatisticsOutput_Count_C extends ResthopperParameter {

	public name: string = "Count";
	public nickName: string = "C";
	public isOptional: boolean = false;
	public typeName: string = "Integer;"

	constructor() {
		super();
		this.instanceGuid = newGuid();
	}

}
