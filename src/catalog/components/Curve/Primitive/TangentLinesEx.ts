import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TangentLinesEx extends ResthopperComponent {

	public guid: string = "d6d68c93-d00f-4cd5-ba89-903c7f6be64c";
	public name: string = "Tangent Lines (Ex)";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create external tangent lines between circles";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}