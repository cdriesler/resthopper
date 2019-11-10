import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MirrorSurface extends ResthopperComponent {

	public guid: string = "6ce1aa3c-626b-4db7-8b5b-bf74c78f8c5e";
	public name: string = "Mirror Surface";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Mirror geometry in a freeform surface.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}