import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class QuadmeshSettings extends ResthopperComponent {

	public guid: string = "b7cbe6eb-0608-4038-88e0-50495a559a41";
	public name: string = "Quadmesh Settings";
	public nickName: string = "QMS";
	public category: string = "Mesh";
	public subCategory: string = "Triangulation";
	public description: string = "A collection of Quad-Remeshing settings";
	public isObsolete: boolean = false;
	public isVariable: boolean = false;

	public library: string = "Transform Components";

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
