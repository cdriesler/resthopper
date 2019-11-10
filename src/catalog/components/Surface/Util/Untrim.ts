import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Untrim extends ResthopperComponent {

	public guid: string = "fa92858a-a180-4545-ad4d-0dc644b3a2a8";
	public name: string = "Untrim";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Remove all trim curves from a surface.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}