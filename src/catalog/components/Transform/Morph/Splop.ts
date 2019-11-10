import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Splop extends ResthopperComponent {

	public guid: string = "ff4e6ccd-47ba-4c8c-8287-2a1f2cb1fa5e";
	public name: string = "Splop";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Wraps geometry onto a surface.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}