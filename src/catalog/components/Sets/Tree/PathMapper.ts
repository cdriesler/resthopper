import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PathMapper extends ResthopperComponent {

	public guid: string = "f9b89a46-bc5d-4f7a-9a6f-134f93ac3af9";
	public name: string = "Path Mapper";
	public nickName: string = "PathMapper";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Perform lexical operations on data trees.";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Grasshopper";

	public input:
	{

	}

	public output:
	{

	}

	constructor() {
		super();
		this.input = {

		}
		this.output = {

		}
	}

}
