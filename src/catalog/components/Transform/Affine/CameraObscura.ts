import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CameraObscura extends ResthopperComponent {

	public guid: string = "407e35c6-7c40-4652-bd80-fde1eb7ec034";
	public name: string = "Camera Obscura";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Camera Obscura (point mirror) transformation.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}