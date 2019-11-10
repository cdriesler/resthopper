import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TransformMatrix extends ResthopperComponent {

	public guid: string = "93c24899-f456-4785-84f2-314958b9347b";
	public name: string = "TransformMatrix";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "A 4x4 Transformation matrix";
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
