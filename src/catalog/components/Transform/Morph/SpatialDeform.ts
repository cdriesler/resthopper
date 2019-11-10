import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SpatialDeform extends ResthopperComponent {

	public guid: string = "66e6596f-6c8f-4ac3-99e0-0c4b7a59a7f7";
	public name: string = "Spatial Deform";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Perform spatial deformation based on custom space syntax.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}