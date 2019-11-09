import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PointDeform extends ResthopperComponent {

	public guid: string = "4dbd15c7-ebcb-4af6-b3bd-32e80502520c";
	public name: string = "Point Deform";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Deform a shape by moving control-points individually";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}