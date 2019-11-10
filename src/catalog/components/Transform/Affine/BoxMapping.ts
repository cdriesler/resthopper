import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoxMapping extends ResthopperComponent {

	public guid: string = "8465bcce-9e0a-4cf4-bbda-1a7ce5681e10";
	public name: string = "Box Mapping";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Transform geometry from one box into another.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}