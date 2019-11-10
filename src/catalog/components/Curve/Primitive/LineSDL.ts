import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LineSDL extends ResthopperComponent {

	public guid: string = "4c619bc9-39fd-4717-82a6-1e07ea237bbe";
	public name: string = "Line SDL";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a line segment defined by start point, tangent and length.}";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}