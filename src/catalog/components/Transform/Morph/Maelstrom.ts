import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Maelstrom extends ResthopperComponent {

	public guid: string = "134a849b-0ff4-4f36-bdd5-95e3996bae8b";
	public name: string = "Maelstrom";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Spirally deforms objects as if they were caught in a whirlpool";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}