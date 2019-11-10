import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SpatialDeformcustom extends ResthopperComponent {

	public guid: string = "331b74f1-1f1f-4f37-b253-24fcdada29e3";
	public name: string = "Spatial Deform (custom)";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Perform spatial deformation based on custom space syntax.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}