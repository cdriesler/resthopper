import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BoxMorph extends ResthopperComponent {

	public guid: string = "d8940ff0-dd4a-4e74-9361-54df537b50db";
	public name: string = "Box Morph";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Morph an object into a twisted box.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}