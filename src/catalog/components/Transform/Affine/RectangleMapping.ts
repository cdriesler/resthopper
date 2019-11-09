import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class RectangleMapping extends ResthopperComponent {

	public guid: string = "17d40004-489e-42d9-ad10-857f7b436801";
	public name: string = "Rectangle Mapping";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Transform geometry from one rectangle into another.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}