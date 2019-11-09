import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class InverseTransform extends ResthopperComponent {

	public guid: string = "51f61166-7202-45aa-9126-3d83055b269e";
	public name: string = "Inverse Transform";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Invert a transformation.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}