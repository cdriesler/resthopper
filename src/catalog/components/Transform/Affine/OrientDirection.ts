import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class OrientDirection extends ResthopperComponent {

	public guid: string = "1602b2cc-007c-4b79-8926-0067c6184e44";
	public name: string = "Orient Direction";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Orient an object using directional constraints only.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}