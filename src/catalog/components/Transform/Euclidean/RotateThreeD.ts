import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RotateThreeD extends ResthopperComponent {

	public guid: string = "3dfb9a77-6e05-4016-9f20-94f78607d672";
	public name: string = "Rotate 3D";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Rotate an object around a center point and an axis vector.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}