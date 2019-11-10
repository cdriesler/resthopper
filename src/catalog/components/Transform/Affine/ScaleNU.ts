import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ScaleNU extends ResthopperComponent {

	public guid: string = "290f418a-65ee-406a-a9d0-35699815b512";
	public name: string = "Scale NU";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Scale an object with non-uniform factors.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}